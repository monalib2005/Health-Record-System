import { FileText, Lock, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface RecordCardProps {
  title: string;
  type: string;
  date: string;
  hospital?: string;
  encrypted?: boolean;
  transactionId?: string;
  onView?: () => void;
}

export const RecordCard = ({
  title,
  type,
  date,
  hospital,
  encrypted = true,
  transactionId,
  onView,
}: RecordCardProps) => {
  return (
    <Card className="p-5 transition-all hover:shadow-md animate-fade-in">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="rounded-lg bg-primary/10 p-2.5">
            <FileText className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-foreground">{title}</h3>
              {encrypted && (
                <Badge variant="secondary" className="gap-1 text-xs">
                  <Lock className="h-3 w-3" />
                  Encrypted
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{type}</p>
            {hospital && (
              <p className="text-xs text-muted-foreground">📍 {hospital}</p>
            )}
            <p className="text-xs text-muted-foreground">📅 {date}</p>
            {transactionId && (
              <p className="text-xs text-primary font-mono">
                🔗 TX: {transactionId}
              </p>
            )}
          </div>
        </div>
        <Button variant="ghost" size="sm" onClick={onView}>
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};
