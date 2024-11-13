"use client"

const getScroll = (
	bg: string,
	main: string,
	accent: string,
	self?: boolean
) => {
	return `
	@supports (scrollbar-color: auto) {
		&${self === true ? "" : " *"}{
			scrollbar-width: thin;
			scrollbar-color: ${main} ${bg};
		}
	}
	@supports selector(::-webkit-scrollbar) {
		&${self === true ? "" : " *"}::-webkit-scrollbar {
			height: 8px;
			width: 8px;
		}

		&${self === true ? "" : " *"}::-webkit-scrollbar-track {
			border-radius: 4px;
			background-color: ${bg};
		}

		&${self === true ? "" : " *"}::-webkit-scrollbar-track:hover {
			background-color: ${bg};
		}

		&${self === true ? "" : " *"}::-webkit-scrollbar-track:active {
			background-color: ${bg};
		}

		&${self === true ? "" : " *"}::-webkit-scrollbar-thumb {
			border-radius: 4px;
			background-color: ${accent};
		}

		&${self === true ? "" : " *"}::-webkit-scrollbar-thumb:hover {
			background-color: ${main};
		}

		&${self === true ? "" : " *"}::-webkit-scrollbar-thumb:active {
			background-color: ${main};
		}
	}
	
`
}

export const Monokai = {
	black: "#000000",
	almostBlack: "#212117",
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
	blue: "#67d8ef",
	purple: "#ac80ff",
	pink: "#f92472",
	fonts: {
		title: '"Press Start 2P"',
		body: '"Fira Code"',
		backup: "monospace"
	},
	getScroll
}
