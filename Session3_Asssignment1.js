function Car(model,make,year){
	this.model = model;
	this.make = make;
	this.year = year;
}

var Audi = new Car("Q5","Audi",2009);
var Mercedes = new Car("C","Mercedes",2002);

alert(Audi.model);
alert(Audi.make);
alert(Audi.year);
alert(Mercedes.model);
alert(Mercedes.make);
alert(Mercedes.year);
//alert(person.lastname);