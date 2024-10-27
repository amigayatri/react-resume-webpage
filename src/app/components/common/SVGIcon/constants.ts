"use-client"

import { HomeIcon } from "../../../icons/HomeIcon"

export const icons = new Map([["home", HomeIcon]])

export const numberOfIcons = icons.size
export const usedIcons: Map<string, Set<string>> = new Map()
