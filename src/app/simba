import { ThemeClient } from "../../components/common/client"
import { PageProps } from "../../types/common/"

export default async function Page({ params }: PageProps) {
        let { lng } = await params
        return (
                <ThemeClient onError={false} lng={lng}>
                  <h2>Teste sobre o Simbinha</h2>
                </ThemeClient>
        )
}