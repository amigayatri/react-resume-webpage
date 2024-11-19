import { iconKey } from "../types"

type iconsMap = Map<iconKey, (props: any) => JSX.Element>
type usedIconsMap = Map<string, Set<iconKey>>
type neverUsedIconsSet = Set<iconKey>

export type { iconsMap, usedIconsMap, neverUsedIconsSet }
