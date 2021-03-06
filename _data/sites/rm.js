module.exports = {
	name: "Rocky Mountaineer", // optional, falls back to object key
	description: "RM Performance Audits",
	options: {
		frequency: 5, //60 * 23, // 24 hours
		freshChrome: "site",
		// if the sites don’t share assets on the same domain, we can reset
		// chrome with each run instead of each site in every run (it’s faster)
		// freshChrome: "run"
	},
	urls: [
		"https://www.rockymountaineer.com/",
	]
};
