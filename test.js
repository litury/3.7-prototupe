let user = {
	name: "Bob",
	surname: "Bobovich",

	set fullName1(value) {
		[this.name, this.surname] = value.split(" ")
	},

	get fullName() {
		return `${this.name} ${this.surname}`;
	}
};

let admin = {
	__proto__: user,
	isAdmin: true
};

console.log(admin.fullName1);

admin.fullName = "Alice Cooper";
console.log(admin.name)