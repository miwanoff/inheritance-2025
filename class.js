class Dog {
  constructor(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }
  bark() {
    alert(this.name + " сказав Гав!");
  }
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);

let dogs = [fido, fluffy, spot];
for (let i = 0; i < dogs.length; i++) {
  alert(dogs[i].name);
  dogs[i].bark();
}


