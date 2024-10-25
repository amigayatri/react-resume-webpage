const pink = "#f92472",
	purple = "#ac80ff",
	blue = "#67d8ef",
	almostBlack = "#212117"

const pinkScroll = `
	@supports (scrollbar-color: auto) {
		& * {
			scrollbar-width: thin;
			scrollbar-color: ${pink} ${almostBlack};
		}
	}
	@supports selector(::-webkit-scrollbar) {
		& *::-webkit-scrollbar {
			height: 8px;
			width: 8px;
		}

		& *::-webkit-scrollbar-track {
			border-radius: 4px;
			background-color: ${almostBlack};
		}

		& *::-webkit-scrollbar-track:hover {
			background-color: ${almostBlack};
		}

		& *::-webkit-scrollbar-track:active {
			background-color: ${almostBlack};
		}

		& *::-webkit-scrollbar-thumb {
			border-radius: 4px;
			background-color: ${purple};
		}

		& *::-webkit-scrollbar-thumb:hover {
			background-color: ${pink};
		}

		& *::-webkit-scrollbar-thumb:active {
			background-color: ${pink};
		}
	}
	
`
const blueScroll = `
	@supports (scrollbar-color: auto) {
		& * {
			scrollbar-width: thin;
			scrollbar-color: ${blue} ${almostBlack};
		}
	}
	@supports selector(::-webkit-scrollbar) {
		& *::-webkit-scrollbar {
			height: 8px;
			width: 8px;
		}

		& *::-webkit-scrollbar-track {
			border-radius: 4px;
			background-color: ${almostBlack};
		}

		& *::-webkit-scrollbar-track:hover {
			background-color: ${almostBlack};
		}

		& *::-webkit-scrollbar-track:active {
			background-color: ${almostBlack};
		}

		& *::-webkit-scrollbar-thumb {
			border-radius: 4px;
			background-color: ${purple};
		}

		& *::-webkit-scrollbar-thumb:hover {
			background-color: ${blue};
		}

		& *::-webkit-scrollbar-thumb:active {
			background-color: ${blue};
		}
	}
	
`

const Monokai = {
	black: "#000000",
	almostBlack: almostBlack,
	graphite: "#282923",
	darkGray: "#3e3d32",
	gray: "#74705d",
	lightGray: "#d0d0c3",
	white: "#f7f7f7",
	transparentGray: "#555449b3",
	red: "#f83535",
	orange: "#fd9621",
	yellow: "#f4cd04",
	green: "#a6e22c",
	blue,
	purple,
	pink,
	fonts: {
		title: '"Press Start 2P"',
		body: '"Fira Code"',
		backup: "monospace"
	},
	scroll: pinkScroll,
	blueScroll
}

export const grayscaleMonokai = [
	Monokai.black,
	Monokai.almostBlack,
	Monokai.graphite,
	Monokai.darkGray,
	Monokai.gray,
	Monokai.lightGray,
	Monokai.white,
	Monokai.transparentGray
]

export const rainbowMonokai = [
	Monokai.red,
	Monokai.orange,
	Monokai.yellow,
	Monokai.green,
	Monokai.blue,
	Monokai.purple,
	Monokai.pink
]

export const fullMonokai = [...grayscaleMonokai, ...rainbowMonokai]

export default Monokai
