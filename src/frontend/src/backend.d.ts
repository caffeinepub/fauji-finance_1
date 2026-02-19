import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface backendInterface {
    calculateSimpleInterestOverMonth(principal: number): Promise<number>;
    /**
     * / Calculates simple interest over 12 months, with a tiered interest rate scheme.
     */
    calculateSimpleInterestOverYear(principal: number): Promise<number>;
}
