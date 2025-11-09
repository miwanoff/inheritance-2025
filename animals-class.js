class Animal {
  constructor(name) {
    this.name = name;
  }
  run() {
    alert(`${this.name} біжить!`);
  }
}

// let an = new Animal("Кролик");
// an.run();

class Rabbit extends Animal {
  constructor() {
    // вызов конструктора родительского класса Animal с аргументом "Rabbit"
    super("Кролик");
  }
  run() {
    // виклик метода батьківського класу run()
    super.run();
    alert(`${this.name} стрибає!`);
  }
  cage() {
    alert(`${this.name} сидить у клітці!`);
  }
}

let rabbit = new Rabbit("Кролик");
rabbit.run();
rabbit.cage();

class Dog extends Animal {
  constructor(name, nick) {
    // вызов конструктора родительского класса Animal с аргументом "Rabbit"
    super(name);
    this.nick = nick;
  }
  run() {
    // виклик метода батьківського класу run()
    super.run();
    alert(`${this.name} ${this.nick} гавкає!`);
  }
  bark() {
    alert(`${this.name} ${this.nick} Сказав Гав!`);
  }
}

let fido = new Dog("Пес", "Fido");
let fluffy = new Dog("Пес", "Fluffy");
let spot = new Dog("Пес", "Spot");

// fido.run();
// fluffy.run();
// spot.run();

// fluffy.bark();
// spot.bark();

let dogs = [fido, fluffy, spot];
for (let i = 0; i < dogs.length; i++) {
  alert(dogs[i].name + dogs[i].nick);
  dogs[i].bark();
}
