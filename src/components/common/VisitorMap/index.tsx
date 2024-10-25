import { useEffect, useState } from "react"
import { VisitorMapWrapper, MapContainer } from "./VisitorMap.styled"
import { useTranslation } from "react-i18next"

const mBlue = "67d8ef",
	mPink = "f92472",
	mPurple = "ac80ff",
	mBlack = "212117"
const mapId = `54mojodxwyq`
const fontName = "comic_sans_ms"

interface RevolverMapProps {
	srcId: string
	props: string
	bg?: string
}

const map: RevolverMapProps = {
	srcId: "7",
	props: `&m=1c&c=${mPink}&cr1=${mPurple}&br=16&sx=0&cw=${mBlue}&cb=${mBlack}`,
	bg: `#${mBlue}`
}

const classicMap: RevolverMapProps = {
	srcId: "4",
	props: `&m=7&h=256&c=${mPink}&r=20`
}

const classicGlobe: RevolverMapProps = {
	srcId: "1",
	props: `&s=320&m=4&v=true&r=false&b=${mBlack}&n=false&c=${mPink}`
}

const classicMiniGlobe: RevolverMapProps = {
	srcId: "2",
	props: classicGlobe.props.replace("320", "128")
}

const globe: RevolverMapProps = {
	srcId: "8",
	props: `&m=1c&c=${mBlack}&cr1=${mPink}&f=${fontName}&l=49&z=13&lx=20&ly=-60&hi=30&hc=${mBlue}&cw=${mBlue}&cb=${mPink}`,
	bg: `#${mBlack}`
}

const miniGlobe: RevolverMapProps = {
	srcId: "5",
	props: globe.props,
	bg: globe.bg
}

const chart: RevolverMapProps = {
	srcId: "0",
	props: `&d=2&p=3&b=7&g=3&f=${fontName}&fs=14&r=0&c0=${mPurple}&c1=${mPink}&c2=${mBlue}&ic0=0&ic1=0`,
	bg: "transparent"
}

const link: RevolverMapProps = {
	srcId: "9",
	props: `&t=`
}

const button: RevolverMapProps = {
	srcId: "3",
	props: `&b=0&s=32&m=2&cl=${mBlack}&co=${mBlue}&cd=${mPink}&v0=40&v1=100&r=1`
}

const sources: Map<string, RevolverMapProps> = new Map([
	["globe", globe],
	["map", map],
	["chart", chart],
	["link", link],
	["button", button],
	["invisible", link],
	["classic-globe", classicGlobe],
	["classic-map", classicMap],
	["mini-globe", miniGlobe],
	["classic-mini-globe", classicMiniGlobe]
])

const customTextIds: Set<string> = new Set(["link"])

interface VisitorMapProps {
	id: string
	fullpage?: boolean
}

const VisitorMap = ({ id, fullpage }: VisitorMapProps) => {
	const [bgColor, setBgColor] = useState("transparent")
	const { t } = useTranslation()
	const getSource = () => {
		const sourceInfo = sources.get(id)
		if (sourceInfo === undefined) return ""
		const { srcId, props } = sourceInfo
		if (sourceInfo.bg !== undefined) setBgColor(sourceInfo.bg)
		const linkText = customTextIds.has(id) ? t("stats.linkMapRevolver") : ""
		return `//rf.revolvermaps.com/0/0/${srcId}.js?i=${mapId}${props}${linkText}`
	}
	useEffect(() => {
		const script = document.createElement("script")
		const src = getSource()
		if (src === "") return
		script.src = src
		script.async = true
		const mapContainer = document.getElementById(`mapContainer-${id}`)
		if (mapContainer) {
			mapContainer.appendChild(script)
		}
		return () => {
			if (mapContainer && mapContainer.contains(script)) {
				mapContainer.removeChild(script)
			}
		}
	}, [])
	return (
		<VisitorMapWrapper $isInvisible={id === "invisible"}>
			<MapContainer
				$bgColor={bgColor}
				$isFullpage={fullpage === true}
				id={`mapContainer-${id}`}
			/>
		</VisitorMapWrapper>
	)
}

export default VisitorMap
