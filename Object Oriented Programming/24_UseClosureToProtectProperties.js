function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

let ducky = Bird();
console.log(ducky.getWeight());
