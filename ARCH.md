# New Approach

Create set of Javascript classes for FormationCalculator to implement state management.

## Classes
* FormationCalculator
  * marchCap : integer
  * id : string // name
  * maxTier : integer

* TierDefinition
  * tier : integer [0..12]
  * formation_id : string

* TroopDefinition
  * tier_definition_id : string
  * name : string ['Infantry', 'Cavalry', 'Distance']
  * percentage : fixed.2
  * percentage_locked : boolean
  * qty : integer
  * qty_locked : boolean

* NumEntry
  * value : fixed
  * locked : boolean
  * percentage : boolean
