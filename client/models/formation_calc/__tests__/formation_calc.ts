import { MFormationCalc } from '../';
import { Int, Percentage, TierNum, TroopType } from '../../form_calc.types';

describe( 'MFormationCalc', () => {

  describe('constructor', () => {
    it('should return an instance of MFormationCalc', () => {
      let instance = new MFormationCalc('test', 1 as Int, TierNum.T12);
      expect(instance instanceof MFormationCalc).toEqual(true);
    });
    it('should set the id property', () => {
      let instance = new MFormationCalc('test', 1 as Int, TierNum.T12);
      expect(instance.id).toEqual('test');
    });
    it('should set the marchCap property', () => {
      let instance = new MFormationCalc('test', 1 as Int, TierNum.T12);
      expect(instance.marchCap).toEqual(1);
    });
    it('should set the highestTier property', () => {
      let instance = new MFormationCalc('test', 1 as Int, TierNum.T12);
      expect(instance.highestTier).toEqual(12);
    });
  });

});
