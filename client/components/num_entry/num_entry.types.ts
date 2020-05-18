/**
 * External dependencies
 */

export interface NumEntryProps {
  id: string;
  value: string;
  label: string;
  dispatchUpdateField(id: string, value: string);
}

export interface NumEntryState {
  percentage: boolean;
}
