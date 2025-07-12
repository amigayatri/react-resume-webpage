import { useSearchParams } from "next/navigation"

export const useGetParams = () => {
	return new URLSearchParams(useSearchParams())
}
