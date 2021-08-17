function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function () {
    console.log("nom nom");
  },
  describe: function () {
    console.log("My name is " + this.name);
  },
};

let dog_1 = new Dog("Crown");
console.log(dog_1.describe);
