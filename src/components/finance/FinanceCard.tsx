
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FinanceCardProps {
  title: string;
  value: string | number;
  description?: string;
  footer?: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
  icon?: React.ReactNode;
}

const FinanceCard = ({ 
  title, 
  value, 
  description, 
  footer, 
  trend = "neutral",
  className,
  icon
}: FinanceCardProps) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon && <div className="h-4 w-4 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value}
          {trend === "up" && (
            <span className="ml-2 text-sm text-avatar-green">▲ +2.5%</span>
          )}
          {trend === "down" && (
            <span className="ml-2 text-sm text-avatar-red">▼ -1.8%</span>
          )}
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default FinanceCard;
