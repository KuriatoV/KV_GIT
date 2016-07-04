 //------------------------1 способ -------------------------------
 var speech;
 var Animal = {
   constructor: function(name, age, sound, region) {
     this.name = name;
     this.age = age;
     this.sound = sound;
     this.region = region;
     return this;
   },
   say: function(speech) {
     console.log("Hi,my name is " + this.name +
       " and i'm saying: '" + speech + "'");
   }
 };
 var dog = Object.create(Animal).constructor("Dog", 5, "woof", "Kyiv");
 var cat = Object.create(Animal).constructor("Cat", 4, "meow", "Lviv");
 var woodpecker = Object.create(Animal).constructor("Woodpecker", 3,
   "Peck-peck", "Poltava");
 dog.goAway = function() {
   console.log(this.name + ", woof AWAY!");
 };
 cat.goAway = function() {
   console.log(this.name + ", meow AWAY!");
 };
 woodpecker.goAway = function() {
   console.log(this.name + ", peck-peck AWAY!");
 };
 //----------------------2 способ -----------------------------------
 
 };
 woodpecker.goAway = function() {
     console.log(this.name + ", peck-peck AWAY!");
 };*/
 var getType = function(obj) {
   if (obj.name !== undefined && obj.age !== undefined && obj.sound !==
     undefined && obj.region !== undefined && obj.say !== undefined &&
     typeof obj.say === 'function') {
     console.log('Type of this object is Animal')
   } else {
     console.log("Type of this object is NOT 'Animal'! ");
   };
 }
 var getType_ = function() {
   if (this.name !== undefined && this.age !== undefined && this.sound !==
     undefined && this.region !== undefined && this.say !== undefined &&
     typeof this.say === 'function') {
     console.log('Type of this object is Animal')
   } else {
     console.log("Type of this object is NOT 'Animal'! ");
   };
 }
 dog.say("woof woof");
 cat.say("Meow..");
 woodpecker.say("Peck-peck,peck-peck");
 dog.goAway();
 cat.goAway();
 woodpecker.goAway();
 getType(dog);
 getType_.call(cat);