import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useCalculateInterest(principal: number, days: number) {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['calculateInterest', principal, days],
    queryFn: async () => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      // Convert days to year fraction
      const yearFraction = days / 365;
      
      // Calculate interest: interest = principal × 9 × (days/365)
      // Total = principal + interest
      const interest = principal * 9 * yearFraction;
      const total = principal + interest;

      return {
        principal,
        interest,
        total,
        days,
      };
    },
    enabled: !!actor && !isFetching && principal > 0 && days > 0,
  });
}
