(() => {
	function getMovieById(movieId: string) {
		console.log({ movieId });
	}

	function getMovieCastById(movieId: string) {
		console.log({ movieId });
	}

	function getActorBioById(actorId: string) {
		console.log({ actorId });
	}

	interface Movie {
		cast: string[];
		description: string;
		rating: number;
		title: string;
	}

	function createMovie({ title, description, rating, cast }: Movie) {
		console.log({ title, description, rating, cast });
	}

	function createActor(firstName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (firstName === "fernando") return false;

		console.log("Crear actor");
		return true;
	}

	const getPayAmount = ({
		isDead = false,
		isSeparated = true,
		isRetired = false,
	}): number => {
		if (isDead) return 1500;

		if (isSeparated) return 2500;

		return isRetired ? 3000 : 4000;
	};
})();
