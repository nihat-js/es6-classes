class Employee {

	constructor(name, age, salary) {
		this._name = name
		this._age = age
		this._salary = salary
	}

	get name() {
		return this._name
	}
	set name(name) {
		this._name = name
	}

	get age() {
		return this._age
	}
	set age(age) {
		this._age = age
	}

	get salary() {
		return this._salary
	}

	set salary(salary) {
		this._salary = salary

	}
}


class Programmer extends Employee {
	constructor(name,age,salary,lang){
		super(name,age,salary)
		this._lang = lang
	}

	get salary (){
		return this._salary *3
	}

	set salary (salary){
		this._salary = salary
	}

	get lang (){
		return this._lang
	}
	set lang (lang){
		this._lang = lang
	}

}

let nihat = new Programmer("nihat", 20, 1000,["JS","PHP"])
let alissa = new Programmer("alissa",24,1300,["C","C++"])
let ben = new Programmer("ben","19",600,["Python"])


nihat.age = 22
nihat.salary = 5000

console.log(nihat.salary)
console.log(alissa.salary)
console.log(ben.salary)