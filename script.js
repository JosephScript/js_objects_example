var Person = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  var hiddenVar = "WOOHOO!";
  this.fullName = function(){
    return this.firstName + " " + this.lastName;
  }
  this.woohoo = function(){
    return this.firstName + hiddenVar;
  }
}

Person.prototype.sayHello = function(){
    return "Hello my name is " 
    + this.fullName();
}

function Student(firstName, lastName, subject){
  Person.call(this, firstName, lastName);
  this.subject = subject;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHello = function(){
  return "Hello my name is " + this.fullName()
  + " and I'm studying " + this.subject;
}

var student1 = new Student('Bob', 'Ross', 'Art');
console.log(student1.sayHello());

console.log(student1 instanceof Person);
console.log(student1 instanceof Student);