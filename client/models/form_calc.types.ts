import { Big } from 'big.js';

// https://spin.atomicobject.com/2018/11/05/using-an-int-type-in-typescript/
export type Int = number & { __int__: void };
export type Percentage = Big;

export enum TierNum {
  T1 = 1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
}

export enum TroopType {
  Infantry = "INFANTRY",
  Cavalry = "CAVALRY",
  Distance = "DISTANCE",
  Artillery = "ARTILLERY"
}