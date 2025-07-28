import { BaseElementProps, ElementProps } from "../../../types/common"

export interface SimpleAuthProps extends ElementProps {}
export interface SimpleAuthBaseProps extends SimpleAuthProps {}
export interface SimpleAuthBaseProps extends BaseElementProps {}

export interface ShowListProps extends ElementProps {
    title: string
    loveMode: boolean
}
export interface ShowListBaseProps extends ShowListProps {}
export interface ShowListBaseProps extends BaseElementProps {}

export interface ShowObject {
    artist: string
    date: string
    city: string
    place: string
    ticket: {
        type: string
        purchased: boolean
    }
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
    accommodation?: {
        start: string
        end: string
        name: string
        address: string
    }
}

export interface ShowItemProps extends BaseElementProps {
    showObject: ShowObject
}
