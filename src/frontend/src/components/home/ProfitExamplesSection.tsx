import { TrendingUp, Calendar, IndianRupee } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import RevealOnScroll from '../RevealOnScroll';

const examples = [
  {
    investment: 100,
    profit: 1000,
    duration: '1 year',
    icon: IndianRupee,
  },
  {
    investment: 200,
    profit: 2000,
    duration: '1 year',
    icon: TrendingUp,
  },
  {
    investment: 400,
    profit: 4000,
    duration: '1 year',
    icon: Calendar,
  },
];

export default function ProfitExamplesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real Profit Examples
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how your investment grows with our transparent interest rates
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <RevealOnScroll key={index} delay={index * 100}>
                <Card className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16" />
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-10 w-10 text-primary animate-pulse-subtle" />
                      <span className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {example.duration}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">
                      Invest ₹{example.investment}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Profit Earned</p>
                      <p className="text-3xl font-bold text-primary">
                        ₹{example.profit.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Total Return</p>
                      <p className="text-2xl font-semibold">
                        ₹{(example.investment + example.profit).toLocaleString('en-IN')}
                      </p>
                    </div>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full mt-4">
                        Start Investing
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
