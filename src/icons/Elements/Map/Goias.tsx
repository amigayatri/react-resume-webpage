import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const GoiasIcon = (props: SVGProps) => {
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
                <path d="M 101.257 21.911 C 98.166 23.12 94.358 20.809 93.008 21.342 C 92.018 21.738 93 24.477 92.781 25.56 C 92.786 23.751 81.473 23.508 81.242 23.78 C 80.832 23.219 80.621 22.608 80.483 21.93 C 79.675 21.965 79.246 22.469 79.168 23.397 C 78.622 21.943 75.136 16.928 74.684 16.524 C 72.552 21.433 70.915 13.926 68.814 18.516 C 68.106 20.117 68.246 24.741 65.295 22.483 C 60.745 16.668 49.606 20.135 55.942 10.211 C 52.676 11.752 50.808 14.83 49.555 18.457 C 47.421 24.63 47.074 32.398 44.7 36.923 C 42.819 40.447 43.778 44.768 41.858 48.448 C 40.291 51.347 36.094 49.145 34.141 52.841 C 32.182 56.507 32.682 61.88 27.847 63.445 C 24.287 64.579 22.363 66.574 19.236 69.492 C 18.559 70.063 17.599 74.613 16.281 76.748 C 12.549 78.527 10.981 84.362 10.165 88.134 C 9.418 90.775 11.427 92.629 11.95 94.93 C 12.075 95.479 12.117 96.053 12.015 96.67 C 11.105 102.131 13.515 99.074 15.78 99.979 C 16.083 100.102 16.385 100.287 16.675 100.582 C 17.74 101.723 11.552 105.134 16.389 105.919 C 18.307 106.242 22.438 105.067 23.007 107.909 C 29.709 108.175 37.744 114.62 44.062 117.79 C 48.782 109.751 63.81 98.771 67.256 105.492 C 74.44 95.924 87.89 107.554 92.938 100.369 C 94.221 98.594 96.854 98.482 97.776 96.528 C 98.2 95.604 97.136 92.9 97.703 91.478 C 99.481 87.065 91.374 88.42 97.561 82.901 C 103.467 77.638 95.07 76.747 95.997 72.27 C 96.039 72.066 96.082 71.886 96.124 71.695 C 91.232 71.717 79.256 68.884 79.565 67.182 C 79.956 65.188 81.2 56.543 81.2 56.543 C 81.2 56.543 97.992 52.772 99.627 56.543 C 100.382 58.318 100.609 61.492 100.363 64.471 C 100.618 64.445 100.892 64.422 101.192 64.404 C 102.687 64.31 103.588 64.003 104.134 63.556 C 104.48 62.85 104.66 61.824 104.709 60.675 C 104.404 59.138 103.779 57.341 104.306 55.691 C 104.049 54.409 103.711 53.472 103.395 53.377 C 103.365 52.627 103.471 52.055 103.671 51.617 C 103.711 51.434 103.809 51.272 103.974 51.128 C 104.877 50.091 106.678 50.438 108.309 51.276 C 108.51 51.263 108.674 51.224 108.819 51.17 C 109.112 50.901 109.304 50.463 109.376 49.82 C 109.394 49.494 109.412 49.204 109.431 48.928 C 109.195 47.603 108.707 46.14 109.552 45.765 C 109.171 45.926 114.265 47.567 116.23 48.194 C 117.576 46.658 116.684 43.344 117.181 41.815 C 117.317 41.395 117.557 41.108 117.98 41.033 C 118.336 40.023 113.926 34.398 113.463 32.265 C 112.861 29.4 114.14 25.631 116.557 23.762 C 111.578 24.6 111.505 21.753 114.923 18.8 C 113.048 20.434 112.345 18.69 111.486 17.475 C 111.4 17.355 111.313 17.237 111.223 17.129 C 111.503 18.266 102.615 21.396 101.257 21.911 Z"/>
            </Icon>
	    </IconWrapper>
	)
}