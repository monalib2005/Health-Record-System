import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  gradient?: boolean;
}

export const StatsCard = ({ title, value, icon: Icon, trend, gradient }: StatsCardProps) => {
  return (
    <Card className={`p-6 transition-all hover:shadow-lg ${gradient ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {trend && (
            <p className="text-xs text-muted-foreground">{trend}</p>
          )}
        </div>
        <div className="rounded-lg bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </Card>
  );
};
