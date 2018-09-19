var methods = {};

var giraffeMaker = function(name, height) {
  var newGiraffe = Object.create(methods);
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  return newGiraffe;
};

methods.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

methods.isHungry = function() {
  return this.hunger > 0;
};

methods.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

methods.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

methods.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough')
  }
};
