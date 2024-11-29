import { groupsSetsMap, groupsSetsEntries } from "./types"
import { ancientIconsSet } from "./ancient"
import { animalsIconsSet } from "./animals"
import { brasilIconsSet } from "./brasil"
import { charactersIconsSet } from "./characters"
import { facesIconsSet } from "./faces"
import { foodIconsSet } from "./food"
import { generalIconsSet } from "./general"
import { geographyIconsSet } from "./geography"
import { interfaceIconsSet } from "./interface"
import { logoIconsSet } from "./logo"
import { mapIconsSet } from "./map"
import { mediaIconsSet } from "./media"
import { miscIconsSet } from "./misc"
import { musicinstrumentsIconsSet } from "./musicinstruments"
import { natureIconsSet } from "./nature"
import { techIconsSet } from "./tech"
import { vehiclesIconsSet } from "./vehicles"
const entries: groupsSetsEntries = [
    ["ancient", ancientIconsSet],
    ["animals", animalsIconsSet],
    ["brasil", brasilIconsSet],
    ["characters", charactersIconsSet],
    ["faces", facesIconsSet],
    ["food", foodIconsSet],
    ["general", generalIconsSet],
    ["geography", geographyIconsSet],
    ["interface", interfaceIconsSet],
    ["logo", logoIconsSet],
    ["map", mapIconsSet],
    ["media", mediaIconsSet],
    ["misc", miscIconsSet],
    ["musicinstruments", musicinstrumentsIconsSet],
    ["nature", natureIconsSet],
    ["tech", techIconsSet],
    ["vehicles", vehiclesIconsSet]
]
export const groupsSets: groupsSetsMap = new Map(entries)
export const availableGroups: string[] = Array.from(groupsSets.keys())
