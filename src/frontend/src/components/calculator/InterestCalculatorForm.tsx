import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { validatePrincipal, validateDays } from '@/utils/validateInput';
import { Loader2 } from 'lucide-react';

interface InterestCalculatorFormProps {
  onCalculate: (principal: number, days: number) => void;
  isLoading?: boolean;
}

export default function InterestCalculatorForm({ onCalculate, isLoading }: InterestCalculatorFormProps) {
  const [principal, setPrincipal] = useState('');
  const [days, setDays] = useState('');
  const [errors, setErrors] = useState<{ principal?: string; days?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const principalNum = parseFloat(principal);
    const daysNum = parseInt(days);

    const principalValidation = validatePrincipal(principalNum);
    const daysValidation = validateDays(daysNum);

    if (!principalValidation.isValid || !daysValidation.isValid) {
      setErrors({
        principal: principalValidation.error,
        days: daysValidation.error,
      });
      return;
    }

    setErrors({});
    onCalculate(principalNum, daysNum);
  };

  const handlePrincipalChange = (value: string) => {
    setPrincipal(value);
    if (errors.principal) {
      setErrors({ ...errors, principal: undefined });
    }
  };

  const handleDaysChange = (value: string) => {
    setDays(value);
    if (errors.days) {
      setErrors({ ...errors, days: undefined });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="principal">Principal Amount (₹)</Label>
        <Input
          id="principal"
          type="number"
          placeholder="Enter amount"
          value={principal}
          onChange={(e) => handlePrincipalChange(e.target.value)}
          min="0"
          step="0.01"
          aria-invalid={!!errors.principal}
          aria-describedby={errors.principal ? 'principal-error' : undefined}
        />
        {errors.principal && (
          <p id="principal-error" className="text-sm text-destructive">
            {errors.principal}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="days">Time Period (Days)</Label>
        <Input
          id="days"
          type="number"
          placeholder="180"
          value={days}
          onChange={(e) => handleDaysChange(e.target.value)}
          min="1"
          max="365"
          step="1"
          aria-invalid={!!errors.days}
          aria-describedby={errors.days ? 'days-error' : undefined}
        />
        {errors.days && (
          <p id="days-error" className="text-sm text-destructive">
            {errors.days}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Calculating...
          </>
        ) : (
          'Calculate'
        )}
      </Button>
    </form>
  );
}
