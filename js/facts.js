function DisplayFacts() {
var myFacts = [ 'Ada Lovelace was the founder of scientific computing!', 
  'Grace Hopper developed COLOB, the first user friendly business computer software program!',
  'Anita Borg was a programmer and creator of Systers!',
  'Kimberly Bryant is the founder of Black Girls Code!',
  'Mary Flanagan created Tiltfactor, which develops games for social change!',
  'Jocelyn Goldfein is the Director of Engineering at Facebook!',
  'Wanda Austin is the president and CEO of the Aerospace Corporation!',
  'Ursula Burns is the Chairman and CEO of Xerox!',
  'Tanya Van Court is a vice president at Discovery Education!' 
  ];

var random = myFacts[Math.floor(Math.random()*myFacts.length)];

alert(random);


}

DisplayFacts();