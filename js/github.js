document.roadmap.providers.github = {
    getRoadmap: (user, repo, branch="main") => {
		return new Promise(async (res, rej) => {
			const response = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/${branch}/ROADMAP`);
			const json = await response.json();
			
			res(json);
		});
    }
};