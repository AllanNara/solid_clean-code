interface Bird {
	eat(): void;
}
interface FlyingBird {
	fly(): string;
}
interface RunningBird {
	run(): void;
}
interface SwimmerBird {
	swim(): void;
}

class Tucan implements Bird, FlyingBird {
	public fly() {
		return "Fly!";
	}
	public eat() {}
	public run() {}
}

class Humminbird implements Bird, FlyingBird {
	public fly() {
		return "Fly!";
	}
	public eat() {}
	public run() {}
}

class Ostrich implements Bird, RunningBird {
	public eat() {}
	public run() {}
}

class Penguin implements Bird, SwimmerBird {
	public eat() {}
	public run() {}
	public swim() {}
}
