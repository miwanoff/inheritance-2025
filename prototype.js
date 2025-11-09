function isPos(an) {
  for (i = 0; i < an.length; i++) {
    if (an[i] < 0) return false;
  }
  return true;
}

Array.prototype.isPositive = function () { 
    for (i=0; i < this.length; i++) {
       if (this[i] < 0) 
           return false; 
    } 
    return true; 
}

//let an2 = [1,2,3];
let an2 = Array(1, 2, 3);
let an3 = [1,-2,3]; 
//console.log(isPos(an3));

console.log(an2.isPositive());
