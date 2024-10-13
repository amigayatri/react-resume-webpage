const fs = require("fs")
fs.readFile("./package.json", "utf8", (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	const { dependencies, devDependencies } = JSON.parse(data)
	const names = new Set()
	for (const name of Object.keys(dependencies)) {
		names.add(name)
	}
	for (const name of Object.keys(devDependencies)) {
		names.add(name)
	}
	console.log(names)
})
