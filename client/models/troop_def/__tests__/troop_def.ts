import { MTierDef } from '../';
import { Int, Percentage, TierNum, TroopType } from '../../form_calc.types';

describe( 'MTierDef', () => {

  describe('constructor', () => {
    it('should return an instance of MTierDef', () => {
      let instance = new MTierDef(TierNum.T12, 100 as Percentage, false);
      expect(instance instanceof MTierDef).toEqual(true);
    });
    it('should set the id property', () => {
      let instance = new MTierDef(TierNum.T12, 100 as Percentage, false);
      expect(instance.tierNum).toEqual(TierNum.T12);
    });
    it('should set the marchCap property', () => {
      let instance = new MTierDef(TierNum.T12, 100 as Percentage, false);
      expect(instance.percentage).toEqual(100 as Percentage);
    });
    it('should set the highestTier property', () => {
      let instance = new MTierDef(TierNum.T12, 100 as Percentage, true);
      expect(instance.locked).toEqual(true);
    });
  });

});
