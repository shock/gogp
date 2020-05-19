import { Int, Percentage, TierNum, TroopType } from '../form_calc.types';

class MTierDef {
  private tierNum: TierNum;
  private percentage: Percentage;
  private locked: boolean;

  constructor(tierNum: TierNum, percentage: Percentage, locked: boolean = false) {
    this.tierNum = tierNum;
    this.percentage = percentage;
    this.locked = locked;
  }

  lock() {
    this.locked = true;
  }

  unlock() {
    this.locked = false;
  }

  // returns troop count for all types in this tier
  troopCount():Int {
    // TODO: get troop count from sum of troop defs
    return 1 as Int;
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

export { MTierDef };