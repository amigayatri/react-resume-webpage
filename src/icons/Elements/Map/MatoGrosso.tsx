import { IconWrapper, Icon } from "../Common.styled"
import { SVGProps } from "../types"

export const MatoGrossoIcon = (props: SVGProps) => {
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
                <path d="M 48.48 113.792 C 48.946 114.018 49.632 114.211 50.5 114.374 C 52.725 113.301 53.992 112.585 55.643 110.344 C 57.822 107.353 64.667 107.833 67.349 110.089 C 68.397 110.957 69.905 111.845 71.237 112.233 C 73.872 113.011 76.143 109.723 78.368 111.506 C 81.47 113.991 82.223 109.955 84.916 108.583 C 86.468 107.775 83.698 114.978 83.112 115.089 C 85.13 115.86 86.639 115.817 88.729 115.864 C 88.982 115.87 89.191 115.885 89.382 115.904 C 89.834 115.794 90.294 115.642 90.761 115.454 C 90.426 113.979 89.137 112.789 89.616 111.095 C 90.14 108.675 91.146 104.933 93.54 103.792 C 94.386 102.422 95.002 99.504 95.435 99.137 C 97.441 97.266 98.675 95.985 100.958 95.259 C 104.06 94.254 103.739 90.808 104.995 88.456 C 106.249 86.086 108.941 87.498 109.946 85.638 C 111.178 83.278 110.563 80.506 111.769 78.246 C 113.292 75.343 113.515 70.361 114.884 66.401 C 114.925 65.38 114.948 64.456 113.687 63.621 C 115.285 61.204 113.369 57.712 113.733 55.235 C 114.668 48.87 115.101 42.915 118 36.447 C 117.998 36.447 117.995 36.447 117.992 36.445 C 101.225 34.71 84.4 33.867 67.608 32.487 C 62.372 32.054 55.95 32.886 53.338 28.606 C 52.243 26.837 49.606 26.713 48.432 25.058 C 47.154 23.245 47.736 20.723 46.822 18.682 C 46.638 18.274 44.796 13.204 43.657 12.25 C 43.473 12.096 43.306 12.049 43.17 12.149 C 43.156 12.158 43.14 12.154 43.128 12.168 C 42.011 13.25 42.626 15.703 40.938 16.423 C 42.1 19.172 39.591 22.481 40.583 24.524 C 41.839 27.124 35.78 26.04 34.422 26.051 C 27.77 26.143 20.788 26.542 14.195 25.87 C 12.877 25.733 12.125 25.9 11.701 26.238 C 11.498 26.4 11.37 26.599 11.294 26.827 C 10.842 28.19 12.23 30.477 10.031 30.65 C 9.781 31.277 11.15 32.863 11.241 33.373 C 11.619 35.267 10.533 37.676 10.545 39.58 C 10.557 42.215 11.402 44.325 10.991 47.259 C 12.473 47.806 14.378 47.452 15.895 47.338 C 18.064 47.177 25.98 47.441 26.106 50.463 C 26.219 53.247 22.547 54.125 25.798 57.115 C 25.534 58.712 28.034 60.082 27.019 61.748 C 24.315 61.929 23.005 69.369 21.566 71.422 C 21.454 71.583 21.259 71.741 21.032 71.897 C 19.892 72.678 17.819 73.421 19.854 74.458 C 20.756 74.914 21.383 75.324 21.623 76.477 C 21.988 78.255 21.201 79.637 22.205 81.793 C 23.699 85.021 21.861 84.931 21.428 87.451 C 20.765 91.217 24.529 94.777 23.868 98.955 C 29.71 98.905 35.619 99.728 41.448 99.224 C 41.403 102.509 38.917 104.382 40.834 107.757 C 42.659 110.946 46.603 110.045 47.724 112.988 C 47.965 113.265 48.222 113.541 48.48 113.792 Z"/>
            </Icon>
	    </IconWrapper>
	)
}