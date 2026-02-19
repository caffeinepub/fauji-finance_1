interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validates principal amount input
 */
export function validatePrincipal(principal: number): ValidationResult {
  if (isNaN(principal)) {
    return { isValid: false, error: 'Please enter a valid number' };
  }
  
  if (principal <= 0) {
    return { isValid: false, error: 'Principal must be greater than 0' };
  }

  if (principal > 10000000) {
    return { isValid: false, error: 'Principal amount is too large' };
  }

  return { isValid: true };
}

/**
 * Validates time period (days) input
 */
export function validateDays(days: number): ValidationResult {
  if (isNaN(days)) {
    return { isValid: false, error: 'Please enter a valid number' };
  }
  
  if (!Number.isInteger(days)) {
    return { isValid: false, error: 'Days must be a whole number' };
  }
  
  if (days < 1) {
    return { isValid: false, error: 'Time period must be at least 1 day' };
  }

  if (days > 365) {
    return { isValid: false, error: 'Time period cannot exceed 365 days (1 year)' };
  }

  return { isValid: true };
}
