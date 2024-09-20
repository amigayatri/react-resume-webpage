import { CodeIcon } from "./CodeIcon"
import { DownloadIcon } from "./DownloadIcon"
import { EmailIcon } from "./EmailIcon"
import { GithubIcon } from "./GithubIcon"
import { LinkedinIcon } from "./LinkedinIcon"
import { MoonIcon } from "./MoonIcon"
import { PaletteIcon } from "./PaletteIcon"
import { PersonIcon } from "./PersonIcon"
import { PhoneIcon } from "./PhoneIcon"
import { SunIcon } from "./SunIcon"
import { WebsiteIcon } from "./WebsiteIcon"

export interface SVGProps {
	color: string
	alt: string
	size: number
}

export const icons = new Map([
	["code", CodeIcon],
	["download", DownloadIcon],
	["email", EmailIcon],
	["github", GithubIcon],
	["linkedin", LinkedinIcon],
	["linkedinH", LinkedinIcon],
	["dark", MoonIcon],
	["palette", PaletteIcon],
	["resume", PersonIcon],
	["light", SunIcon],
	["website", WebsiteIcon],
	["phone", PhoneIcon]
])
