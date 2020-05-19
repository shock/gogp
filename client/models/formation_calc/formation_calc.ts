import { Int, Percentage, TierNum, TroopType } from '../form_calc.types';

class MFormationCalc {
  private id: string;
  private marchCap: Int;
  private highestTier: TierNum;

  constructor(id: string, marchCap: Int, highestTier: TierNum) {
    this.id = id;
    this.marchCap = marchCap;
    this.highestTier = highestTier;
  }

  // locks tier def's percentage value
  lockTierDefPercentage(tierNum: TierNum, troopType: TroopType) {}

  // unlocks troop def's percentage value
  unlockTierDefPercentage(tierNum: TierNum, troopType: TroopType) {}

  // Updates a tier's percentage of the total formation
  // noop if tier percentage is locked
  updateTierPecentage(tierNum: TierNum, percentage: Percentage) {
  }

  // locks troop def's percentage value
  // if troop def's count is locked, it will be unlocked
  lockTroopDefPercentage(tierNum: TierNum, troopType: TroopType) {}

  // unlocks troop def's percentage value
  // troop def's count lock is unchanged
  unlockTroopDefPercentage(tierNum: TierNum, troopType: TroopType) {}

  // Updates a troop def's percentage
  // noop if percentage is locked
  updateTroopDefPercentage(tierNum: TierNum, troopType: TroopType, percentage: Percentage) {
  }

  // locks troop def's count value
  // if troop def's percentage is locked, it will be unlocked
  lockTroopDefCount(tierNum: TierNum, troopType: TroopType) {}

  // unlocks troop def's count value
  // troop def's percentage lock is unchanged
  unlockTroopDefCount(tierNum: TierNum, troopType: TroopType) {}

  // Updates a troop def's count
  // noop if count is locked
  updateTroopDefCount(tierNum: TierNum, troopType: TroopType, count: Int) {
  }

}

export { MFormationCalc };