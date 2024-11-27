import { iconKey } from "../../types"

type groupIconsSet = Set<iconKey>
type groupsSetsMap = Map<string, groupIconsSet>
type groupsSetsEntries = [string, groupIconsSet][]

export type { groupIconsSet, groupsSetsMap, groupsSetsEntries }
