import { Alert, AlertDescription } from '@/components/ui/alert';
import { Skeleton } from '@/components/ui/skeleton';
import { formatCurrency } from '@/utils/formatCurrency';
import { TrendingUp, Wallet, DollarSign, Calendar } from 'lucide-react';

interface ResultsDisplayProps {
  data?: {
    principal: number;
    interest: number;
    total: number;
    days: number;
  };
  isLoading: boolean;
  error: Error | null;
  hasCalculated: boolean;
}

export default function ResultsDisplay({ data, isLoading, error, hasCalculated }: ResultsDisplayProps) {
  if (!hasCalculated) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px] text-muted-foreground">
        <p className="text-center">Enter values and click Calculate to see results</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          Error calculating interest: {error.message}
        </AlertDescription>
      </Alert>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="p-4 rounded-lg bg-muted/50 border">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Time Period</span>
        </div>
        <p className="text-2xl font-bold">{data.days} {data.days === 1 ? 'Day' : 'Days'}</p>
      </div>

      <div className="p-4 rounded-lg bg-muted/50 border">
        <div className="flex items-center gap-2 mb-2">
          <Wallet className="h-5 w-5 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Principal Amount</span>
        </div>
        <p className="text-2xl font-bold">{formatCurrency(data.principal)}</p>
      </div>

      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <span className="text-sm font-medium text-primary">Interest Earned</span>
        </div>
        <p className="text-2xl font-bold text-primary">{formatCurrency(data.interest)}</p>
      </div>

      <div className="p-4 rounded-lg bg-accent border-2 border-accent-foreground/20">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-5 w-5 text-accent-foreground" />
          <span className="text-sm font-medium text-accent-foreground">Total Amount</span>
        </div>
        <p className="text-3xl font-bold text-accent-foreground">{formatCurrency(data.total)}</p>
      </div>
    </div>
  );
}
