/**
 * External dependencies
 */

export interface FormationCalcProps {
  value?: Object;
  initMarchCapacity: number;
  initName: string;
  dispatchUpdateField(id: string, value: string);
}

export interface FormationCalcState {
  marchCapacity: number;
  name: string;
}
