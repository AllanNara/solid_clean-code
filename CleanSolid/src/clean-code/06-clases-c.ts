(() => {
	// Aplicando el principio de Responsabilidad Unica
	// Priorizar la composición frente a la herencia
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

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		public lastAccess: Date;
		public email: string;
		public role: string;
		constructor({ email, role }: UserProps) {
			this.email = email;
			this.role = role;
			this.lastAccess = new Date();
		}

		checkCredentials() {
			return true;
		}
	}

	// const newUser = new User()

	interface SettingsProps {
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class Settings {
		public workingDirectory: string;
		public lastOpenFolder: string;
		constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
			this.workingDirectory = workingDirectory;
			this.lastOpenFolder = lastOpenFolder;
		}
	}

	interface UserSettingsProps {
		name: string;
		gender: Gender;
		birthdate: Date;
		email: string;
		role: string;
		workingDirectory: string;
		lastOpenFolder: string;
	}

	class UserSettings {
		public person: Person;
		public user: User;
		public settings: Settings;
		constructor({
			name,
			gender,
			birthdate,
			email,
			role,
			workingDirectory,
			lastOpenFolder,
		}: UserSettingsProps) {
			this.person = new Person({ name, gender, birthdate });
			this.user = new User({ email, role });
			this.settings = new Settings({ workingDirectory, lastOpenFolder });
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

	console.log(userSettings);
	console.log(userSettings.user.checkCredentials());
})();
