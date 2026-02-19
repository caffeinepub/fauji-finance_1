import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import InterestCalculatorForm from '../components/calculator/InterestCalculatorForm';
import ResultsDisplay from '../components/calculator/ResultsDisplay';
import { useCalculateInterest } from '../hooks/useCalculateInterest';

export default function CalculatorPage() {
  const [principal, setPrincipal] = useState(0);
  const [days, setDays] = useState(0);
  const [hasCalculated, setHasCalculated] = useState(false);

  const { data, isLoading, error } = useCalculateInterest(principal, days);

  const handleCalculate = (newPrincipal: number, newDays: number) => {
    setPrincipal(newPrincipal);
    setDays(newDays);
    setHasCalculated(true);
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8 md:py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Interest Calculator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your potential returns with our transparent interest rates
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Calculate Your Returns</CardTitle>
              <CardDescription className="text-base">
                Enter your investment amount and time period (up to 1 year) to see how much you can earn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <div>
                  <InterestCalculatorForm 
                    onCalculate={handleCalculate}
                    isLoading={isLoading}
                  />
                </div>

                {/* Results Section */}
                <div>
                  <ResultsDisplay 
                    data={data}
                    isLoading={isLoading}
                    error={error}
                    hasCalculated={hasCalculated}
                  />
                </div>
              </div>

              {/* Explanation */}
              <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                <h3 className="font-semibold text-lg mb-3">How It Works</h3>
                <p className="text-muted-foreground mb-4">
                  Our interest calculation is simple and transparent. We use a high-return rate to help you grow your savings:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>₹100 investment → ₹900 profit per year (₹2.47 per day)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>₹200 investment → ₹1,800 profit per year (₹4.93 per day)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>₹400 investment → ₹3,600 profit per year (₹9.86 per day)</span>
                  </li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The formula is: <strong>Interest = Principal × 9 × (Days ÷ 365)</strong>
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Maximum calculation period is 365 days (1 year)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
