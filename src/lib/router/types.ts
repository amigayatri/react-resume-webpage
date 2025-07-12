import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export interface MyRouterClass {
    pathname: string
    router: AppRouterInstance
    params: URLSearchParams
}
