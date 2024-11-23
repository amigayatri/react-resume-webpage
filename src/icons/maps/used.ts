import { iconKey } from "../types";
import { removeUsed } from "./never";

//$entriesArrStart
//blablabla
//$entriesArrEnd

type mapEntriesFn = ([local, iconsArr]: [string, string[]]) => [string, Set<iconKey>]

const mapEntries: mapEntriesFn = ([local, iconsArr]) => {
    const localSet: Set<iconKey> = new Set()
    for (const iconId of iconsArr) {
        localSet.add(iconId as iconKey)
    }
    return [local, localSet]
}

const usedIcons: Map<string, Set<string>> = new Map(Array.from(entriesArr, mapEntries));

type markAsUsed = (id: iconKey, local: string) => void;
const markAsUsed: markAsUsed = (id, local) => {
    const prevUsed = usedIcons.get(local) || new Set();
    prevUsed.add(id as string);
    usedIcons.set(local, prevUsed);
    removeUsed(id);
};

const getAllUsed = () => {
    return Array.from(usedIcons.entries());
};

export { usedIcons, markAsUsed, getAllUsed };
