function Animal(name) {
  this.name = name;
  this.speed = 0;
}

Animal.prototype.run = function () {
  alert(this.name + " біжить!");
};

let an = new Animal('Кролик');
an.run();