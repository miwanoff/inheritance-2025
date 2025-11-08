function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function () {
  alert(this.name + " біжить!");
};

// let an = new Animal('Кролик');
// an.run();

function Rabbit(name) {
  Animal.apply(this, arguments);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

Rabbit.prototype.run = function () {
  Animal.prototype.run.apply(this);
  alert(this.name + " стрибає!");
};

let rabbit = new Rabbit("Кролик");
rabbit.run();

function Dog(name, nick, weight) {
  Animal.apply(this, arguments);
  this.weight = weight;
  this.nick = nick;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.run = function () {
  Animal.prototype.run.apply(this);
  if (this.weight > 12) {
    alert(this.name + this.nick + " гавкає!");
  } else {
    alert(this.name + this.nick + " тяфкає!");
  }
};

let fido = new Dog("Пес", "Fido", 38);
let fluffy = new Dog("Пес", "Fluffy", 30);
let spot = new Dog("Пес", "Spot", 10);

fido.run();
fluffy.run();
spot.run();


