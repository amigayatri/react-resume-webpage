import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const PernambucoIcon = (props: SVGProps) => {
	const { alt, size, hasTransition, color } = props
	return (
		<IconWrapper>
		    <Icon
                $size={size}
                $hasTransition={hasTransition}
                role="img"
                fill={color}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
            >
                <title>{alt}</title>
                <path d="M 111.966 46.817 C 111.331 46.876 110.643 46.988 109.839 47.215 C 109.493 47.312 109.172 47.429 108.863 47.555 C 107.563 48.495 107.228 50.123 105.44 51.334 C 101.606 53.914 95.847 54.132 91.486 54.413 C 91.249 56.212 85.729 60.893 83.808 61.59 C 79.25 63.267 79.93 57.608 76.37 56.331 C 77.183 55.048 80.355 51.14 81.457 48.791 C 81.44 48.717 81.449 48.657 81.492 48.616 C 81.535 48.575 81.556 48.537 81.593 48.498 C 81.812 47.973 81.904 47.545 81.808 47.273 C 81.796 47.239 81.776 47.214 81.762 47.181 C 81.384 46.665 80.539 46.237 79.657 45.915 C 74.711 45.886 63.477 54.825 59.936 52.392 C 59.703 52.229 59.398 52.138 59.059 52.085 C 58.897 52.154 58.736 52.224 58.619 52.273 C 58.742 52.134 58.661 52.059 58.446 52.031 C 58.244 52.026 58.036 52.028 57.821 52.038 C 55.162 52.255 47.188 54.334 47.7 54.413 C 47.68 54.174 47.639 53.945 47.595 53.718 C 47.133 53.602 46.693 53.391 46.298 53.033 C 44.482 51.415 42.884 49.032 40.882 47.379 C 38.686 46.58 36.172 46.102 33.663 45.893 C 30.785 46.688 26.778 48.343 24.075 46.46 C 23.166 46.68 22.361 46.945 21.714 47.256 C 21.649 47.287 21.582 47.337 21.514 47.384 C 20.31 50.206 19.959 52.956 23.19 54.978 C 23.59 61.754 16.35 62.253 13.278 66.392 C 12.209 67.544 11.109 68.618 10 69.664 C 12.904 71.582 24.645 74.329 19.713 80.706 C 18.635 85.622 30.991 76.025 30.671 75.867 C 35.827 75.747 36.784 65.15 43.747 66.83 C 44.107 68.468 53.38 73.606 54.7 73.625 C 55.06 72.665 55.66 71.928 56.578 71.408 C 57.495 71.388 60.339 77.426 61.219 78.864 C 61.331 79.05 61.581 79.311 61.929 79.616 C 64.781 77.014 67.67 75.147 69.332 71.907 C 74.851 76.745 83.091 79.944 87.65 79.924 C 92.365 79.905 94.963 75.065 98.485 72.924 C 99.957 72.034 109.924 70.606 111.731 72.938 C 112.77 71.697 113.569 70.511 114 69.447 C 115.597 65.506 116.274 61.27 118 57.351 C 117.265 54.552 117.538 50.687 116.124 48.483 C 114.998 47.504 113.604 46.945 111.966 46.817 Z"/>
            </Icon>
	    </IconWrapper>
	)
}