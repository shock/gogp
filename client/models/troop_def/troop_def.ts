import { Int, Percentage, TierDef, TroopType } from '../form_calc.types';

class MTroopDef {
  private troopType: TroopType;
  private percentage: Percentage;
  private percentage_locked: boolean;
  private count_locked: boolean;
  private count: Int;

  constructor(troopType: TroopType, percentage: Percentage, count: Int, percentage_locked: boolean, count_locked: boolean) {
    this.troopType = troopType;
    this.percentage = percentage;
    this.count = count;
    this.count_locked = count_locked;
    this.percentage_locked = percentage_locked;
  }

  // Getters
  getTroopType(): TroopType { return this.troopType; }
  getPercentage(): Percentage { return this.percentage; }
  getCount(): Int { return this.count; }
  getPercentageLocked(): boolean { return this.percentage_locked; }

  lock_percentage() {
    this.percentage_locked = true;
    this.count_locked = false;
  }

  lock_count() {
    this.count_locked = true;
    this.percentage_locked = false;
  }

  unlock_percentage() {
    this.percentage_locked = false;
  }

  unlock_count() {
    this.count_locked = false;
  }

  unlocked(): boolean {
    return !(this.percentage_locked || this.count_locked);
  }

  updateCount(tierCount: Int, troopCount: Int) {
  }

  // returns this tier's percentage of marchCap
  calculatePercentage(marchCap: Int) {
    // TODO: convert to fixed point
    return this.troopCount() * 100 / marchCap;
  }

  // updates the percentage based on the marchCap supplied
  // noop if percentage is locked
  updatePercentage(marchCap: Int) {
  }

  // locks troop def's percentage value
  // if troop def's count is locked, it will be unlocked
  lockTroopDefPercentage(troopType: TroopType) {}

  // unlocks troop def's percentage value
  // troop def's count lock is unchanged
  unlockTroopDefPercentage(troopType: TroopType) {}

  // Updates a troop def's percentage
  // noop if percentage is locked
  updateTroopDefPercentage(troopType: TroopType, percentage: Percentage) {
  }

  // locks troop def's count value
  // if troop def's percentage is locked, it will be unlocked
  lockTroopDefCount(troopType: TroopType) {}

  // unlocks troop def's count value
  // troop def's percentage lock is unchanged
  unlockTroopDefCount(troopType: TroopType) {}

  // Updates a troop def's count
  // noop if count is locked
  updateTroopDefCount(troopType: TroopType, count: Int) {
  }

}

export { MTroopDef };