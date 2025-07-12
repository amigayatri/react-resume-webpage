import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { MyRouterClass } from "./types"

export class MyRouter implements MyRouterClass {
    pathname
	router
	params
    constructor() {
        this.pathname = usePathname()
		this.router = useRouter()
		this.params = new URLSearchParams(useSearchParams())
    }

	update () {
		const newParams = this.params.toString()
		console.log(newParams)
		if (newParams === "") {
			this.router.push(this.pathname)
		} else {
			this.router.push(`${this.pathname}?${newParams}`)
		}
	}
}
