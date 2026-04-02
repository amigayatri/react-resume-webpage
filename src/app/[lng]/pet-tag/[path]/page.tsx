import { languages, fallbackLng } from "../../../../i18n/settings";
import { Main } from "../../../../components/pet-tag/pet";
import { useTranslation } from "../../../../i18n";
import { ThemeClient } from "../../../../components/common/client";
import { ErrorMain } from "../../../../components/error/";
import { PageProps } from "../../../../types/common/";

interface PetIdPageProps extends PageProps {
    params: Promise<{ lng: string; path: string }>;
}

export async function generateMetadata({ params }: PetIdPageProps) {
    let { lng, path } = await params;
    const lngNotFound = languages.indexOf(lng) < 0;
    if (lngNotFound) lng = fallbackLng;
    const { t } = await useTranslation(lng, "metadata");
    return {
        title: {
            default: t("base-title", {
                pathTitle: lngNotFound
                    ? t("path.404")
                    : path + " ☆ Identificação"
            })
        },
        content: t("content")
    };
}

export default async function Page({ params }: PetIdPageProps) {
    let { lng, path } = await params;
    const lngNotFound = languages.indexOf(lng) < 0;
    if (lngNotFound) lng = fallbackLng;
    if (lngNotFound) {
        return (
            <ThemeClient onError={true} lng={lng}>
                <ErrorMain lng={lng} id="404" />
            </ThemeClient>
        );
    }
    return (
        <ThemeClient onError={false} lng={lng}>
            <Main path={path} lng={lng} />
        </ThemeClient>
    );
}
