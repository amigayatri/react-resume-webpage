"use client"

import { ErrorMessageBase } from "./ErrorMessageBase"
import { ErrorMessageProps } from "."

export const ErrorMessage = ({
	message,
	lng
}: ErrorMessageProps) => {
	return (
		<ErrorMessageBase message={message} lng={lng} />
	)
}
