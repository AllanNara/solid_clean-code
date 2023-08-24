(() => {
	// NO aplicando el principio de Responsabilidad Unica

	type Gender = "M" | "F" | "X";
	class Person {
		constructor(public name: string, public gender: Gender, public birthday: Date) {}
	}

	// const newPerson = new Person("Allan", "M", new Date("1999-11-02"));
	// console.log({ newPerson });

	class User extends Person {
		public lastAccess: Date;
		constructor(
			public email: string,
			public role: string,
			name: string,
			gender: Gender,
			birthday: Date
		) {
			super(name, gender, birthday);
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	// const newUser = new User()

	class UserSettings extends User {
		constructor(
			public workingDirectory: string,
			public lasOpenFolder: string,
			email: string,
			role: string,
			name: string,
			gender: Gender,
			birthday: Date
		) {
			super(email, role, name, gender, birthday);
		}
	}

	const userSettings = new UserSettings(
		"usr/home",
		"/home",
		"allan@mail.com",
		"admin",
		"Allan",
		"M",
		new Date("1999-11-02")
	);

	console.log({ userSettings, areCretendialsValid: userSettings.checkCredentials() });
})();
