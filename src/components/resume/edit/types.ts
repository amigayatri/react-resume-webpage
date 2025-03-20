import { BaseElementProps, ElementProps } from "../../../types/common"

export interface PasswordProps extends ElementProps {
    setRightPassword: () => void
}

export interface PasswordBaseProps extends BaseElementProps {}
export interface PasswordBaseProps extends PasswordProps {}
