import { MainBase } from "../../../common/Main/MainBase.tsx";
import { PetTagMainProps } from "../types";

export const Main = async (props: PetTagMainProps) => {
    const { lng, path } = props;
    return (
        <MainBase lng={lng}>
            <h2>{path}</h2>          
        </MainBase>
    );
};
