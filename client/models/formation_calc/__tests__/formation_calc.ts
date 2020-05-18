import { MFormationCalc } from '../';

describe( 'MFormationCalc', () => {

  describe('constructor', () => {
    it('should return an instance of MFormationCalc', () => {
      let instance = new MFormationCalc('test', 1);
      expect(instance instanceof MFormationCalc).toEqual(true);
    });
  });

});
