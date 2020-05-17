/**
 * External dependencies
 */

export interface NumEntryProps {
  id: number;
  value: string;
  dispatchUpdateField(id: number, value: string);
}

export interface NumEntryState {
  percentage: boolean;
}
