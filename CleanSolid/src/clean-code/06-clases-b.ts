(() => {
	// NO aplicando el principio de Responsabilidad Unica
	type Gender = "M" | "F" | "X";

	interface PersonProps {
		name: string;
		gender: Gender;
		birthdate: Date;
	}

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;
		constructor({ name, gender, birthdate }: PersonProps) {
			this.name = name;
			this.gender = gender;
			this.birthdate = birthdate;
		}
	}

	interface UserProps extends PersonProps {
		email: string;
		role: string;
	}

	class User extends Person {
		public lastAccess: Date;
		public email: string;
		public role: string;
		constructor({ email, role, name, gender, birthdate }: UserProps) {
			super({ name, gender, birthdate });
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	// const newUser = new User()

	interface UserSettingsProps extends UserProps {
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class UserSettings extends User {
		public workingDirectory: string;
		public lastOpenFolder: string;
		constructor({
			workingDirectory,
			lastOpenFolder,
			email,
			role,
			name,
			gender,
			birthdate,
		}: UserSettingsProps) {
			super({ email, role, name, gender, birthdate });
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	const userSettings = new UserSettings({
		birthdate: new Date("1999-11-02"),
		email: "allan@mail.com",
		gender: "M",
		lastOpenFolder: "/home",
		name: "Allan",
		role: "admin",
		workingDirectory: "usr/home",
	});

	console.log({ userSettings, areCretendialsValid: userSettings.checkCredentials() });
})();
