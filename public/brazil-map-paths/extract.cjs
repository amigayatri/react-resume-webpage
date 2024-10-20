const fs = require("fs")
fs.readFile("./BR-municipios.svg", "utf8", (err, data) => {
	if (err) {
		console.error(err)
		return
	}
	const arr = []
	const split = data.split("/><path ")
	for (const line of split) {
		arr.push(line.replace(/id="\d\d\d\d\d\d\d" d=/gm, ""))
	}
	fs.writeFile("./cities.json", arr.join(",\n"), (error) => {
		if (error) {
			console.error(error)
			return
		}
	})
})
