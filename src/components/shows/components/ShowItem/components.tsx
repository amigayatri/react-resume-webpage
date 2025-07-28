import { Accordion } from "../../../common/"
import { Alert, ArtistName, City, Date, DateAndCity, Iframe, InfoWrapper, ItemInfo, Line, Place } from "./ShowItem.styled"

const TicketInfo = ({ticket}: {ticket: { purchased: boolean, type: string }}) => {
	const {purchased, type} = ticket
		return (
			<InfoWrapper>
				<Line />
				{!purchased ?
					<Alert>Precisa comprar o ingresso!</Alert>
				:   `Tipo do ingresso: ${type}`}
			</InfoWrapper>
		)
}

const PlaceInfo = ({
    place,
    openState
}: {
    place: string
    openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) => {
    const iframeUrl = `https://maps.google.com/maps?q=${place}&output=embed`
    return (
        <InfoWrapper>
            <Line />
            <Place>Local: {place}</Place>
            <Accordion customColor="#f92472" customBgColor="#212117" openState={openState} lng="" label="Ver no mapa">
                <Iframe src={iframeUrl}></Iframe>
            </Accordion>
        </InfoWrapper>
    )
}

const MainInfo = ({ artist, date, city }: { artist: string; date: string; city: string }) => {
    return (
        <>
            <ArtistName>{artist}</ArtistName>
            <Line />
            <DateAndCity>
                <Date>{date}</Date>
                <City>{city}</City>
            </DateAndCity>
        </>
    )
}

const AccommodationInfo = ({
    accommodation,
    openState
}: {
    accommodation?: { start: string; end: string; name: string; address: string }
    openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}) => {
    if (accommodation === undefined) {
        return <></>
    }
    const { start, end, name } = accommodation
    const iframeUrl = `https://maps.google.com/maps?q="${name.replace("&", "%26")}"&output=embed`
    if (start === "" || end === "" || name === "") {
        return (
            <InfoWrapper>
                <Line />
                <Alert>Precisa reservar hospedagem!</Alert>
            </InfoWrapper>
        )
    }
    return (
        <InfoWrapper>
            <Line />
            <Accordion customColor="#f92472" customBgColor="#212117" openState={openState} lng="" label="Hospedagem">
                <ItemInfo>Nome: {name}</ItemInfo>
                <ItemInfo>
                    Período: {start} - {end}
                </ItemInfo>
                <Iframe src={iframeUrl}></Iframe>
            </Accordion>
        </InfoWrapper>
    )
}

const TravelWay = ({ date, way }: { date: string; way: string }) => {
	if (date === "" || way === "") {
		return <Alert>Precisa comprar passagem!</Alert>
	}
	return `${date} - ${way}`
}

const TravelInfo = ({
    travel
}: {
    travel?: {
        goingOut: {
            date: string
            way: string
        }
        comingBack: {
            date: string
            way: string
        }
    }
}) => {
    if (travel === undefined) {
        return <></>
    }
	const { goingOut, comingBack } = travel
    return (
        <InfoWrapper>
            <Line />
            <ItemInfo>
				Ida: <TravelWay {...goingOut} />
			</ItemInfo>
			<ItemInfo>
				Volta: <TravelWay {...comingBack} />	
			</ItemInfo>
        </InfoWrapper>
    )
}

export { AccommodationInfo, MainInfo, PlaceInfo, TicketInfo, TravelInfo }

