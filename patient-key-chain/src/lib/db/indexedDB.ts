import { openDB } from "idb";

export const dbPromise = openDB("patient-keys-db", 1, {
  upgrade(db) {
    db.createObjectStore("keys", { keyPath: "patientId" });
  }
});

export async function savePatientPrivateKey(data: any) {
  const db = await dbPromise;
  await db.put("keys", data);
}
