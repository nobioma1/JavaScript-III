/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. NEW:       when we use a constructor function, the new binding make the 'this' context to point to the object 
                returned by the function.

* 2. EXPLICIT:  Explicit binding is more like telling 'This' what its contect should be. We can do this by using by
                using function method '.call', '.apply' and '.bind'

* 3. IMPLICIT:  Implicit binding is more likely automatically done. This occurs when the dot '.' notation is used to 
                invoke a function. It gets its context from whatever is on the left of the dot.

* 4. GLOBAL:    The is the defualt of 'this' or without a context, 'this' points to the global/window binding.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function printThis() {
  console.log(this); // this logs the window context
}
printThis();

// Principle 2
// code example for Implicit Binding
const airplane = {
  manufacturer: 'Boeing',
  model: '232',
  engine: 'Gas Turbine',
  distance: '23434 km/h',
  canFly() {
    return `The ${this.manufacturer} ${this.model} with a ${this.engine} can fly ${this.distance}`
  }
}
const aboutPlane = airplane.canFly();
console.log(aboutPlane);

// Principle 3
// code example for New Binding
function organism(name, species, family, habitat) {
  this.name = name;
  this.species = species;
  this.family = family;
  this.habitat = habitat;
}
organism.prototype.liveIn = function(color = 'gold'){
  return `${this.name} of ${color} color, live in ${this.habitat}`;
}

const goldFish = new organism('goldfish', 'C. auratus', 'Cyprinidae', 'water');
console.log(goldFish.liveIn('gold'));

// Principle 4
// code example for Explicit Binding
// using the 'organism' function constructor
const newGoldFishLiveIn = goldFish.liveIn;
// using call
console.log(newGoldFishLiveIn.call(goldFish));
console.log(newGoldFishLiveIn.call(goldFish, 'yellow'));
// Using apply
console.log(newGoldFishLiveIn.apply(goldFish, ['lightbrown']));
// Using bind
let bindGoldFish = newGoldFishLiveIn.bind(goldFish);
console.log(bindGoldFish('pink'));
