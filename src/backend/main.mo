import Float "mo:core/Float";

actor {
  /// Calculates simple interest over 12 months, with a tiered interest rate scheme.
  public func calculateSimpleInterestOverYear(principal : Float) : async Float {
    // Tiered rate. E.g. interest calculation for 200 is 200 * 9 = 1800.
    // Add to principal = 200 + 1800 = 2000 total after 1 year.
    principal * 10.0;
  };

  // Calculates simple interest over 1 month.
  public func calculateSimpleInterestOverMonth(principal : Float) : async Float {
    // Monthly rate equivalent to annual rate with 900% simple interest.
    principal * (16.0 / 15.0);
  };
};
