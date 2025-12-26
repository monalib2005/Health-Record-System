// src/lib/crypto/patientKeys.ts

export async function generatePatientKeyPair() {
  return crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256"
    },
    true,
    ["encrypt", "decrypt"]
  );
}

export async function exportPublicKey(publicKey: CryptoKey) {
  return crypto.subtle.exportKey("jwk", publicKey);
}

export async function exportPrivateKey(privateKey: CryptoKey) {
  return crypto.subtle.exportKey("jwk", privateKey);
}

// -------- Password-based encryption --------
export async function deriveAESKey(password: string, salt: Uint8Array) {
  const enc = new TextEncoder();

  const baseKey = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt as BufferSource, // ✅ Type assertion to BufferSource to resolve SharedArrayBuffer incompatibility
      iterations: 100000,
      hash: "SHA-256"
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

export async function encryptPrivateKey(
  privateKeyJwk: JsonWebKey,
  password: string
) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const salt = crypto.getRandomValues(new Uint8Array(16));

  const aesKey = await deriveAESKey(password, salt);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv as BufferSource }, // ✅ Optional: Similar assertion for iv if needed (though it may not error)
    aesKey,
    new TextEncoder().encode(JSON.stringify(privateKeyJwk))
  );

  return { encrypted, iv, salt };
}