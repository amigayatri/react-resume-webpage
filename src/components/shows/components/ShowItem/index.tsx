import { useState } from "react"
import { ShowItemProps } from "../types"
import { ShowItemWrapper } from "./ShowItem.styled"
import { AccommodationInfo, MainInfo, PlaceInfo, TicketInfo, TravelInfo } from "./components"

export const ShowItem = ({ showObject }: ShowItemProps) => {
    const mapOpenState = useState(false)
    const accomodationOpenState = useState(false)
    const { travel, accommodation, ticket, place } = showObject
    return (
        <ShowItemWrapper>
            <MainInfo {...showObject} />
            <TicketInfo ticket={ticket} />
            <PlaceInfo openState={mapOpenState} place={place} />
            <AccommodationInfo openState={accomodationOpenState} accommodation={accommodation} />
            <TravelInfo travel={travel} />
        </ShowItemWrapper>
    )
}
