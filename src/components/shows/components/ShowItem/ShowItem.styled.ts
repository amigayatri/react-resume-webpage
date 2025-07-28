"use client"

import styled from "styled-components"

export const ShowItemWrapper = styled.div`
    border: 2px solid ${({ theme }) => theme.graphite};
    background-color: ${({ theme }) => theme.pink};
    padding: 16px;
    margin: 8px 4px;
    border-radius: 16px;
    color: ${({ theme }) => theme.almostBlack};
    font-weight: bold;
    text-align: left;
`

export const TitleLine = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ArtistName = styled.h3`
    font-size: 2.5rem;
`

export const Date = styled.span`
    font-size: 1.5rem;
`

export const City = styled.span`
    font-size: 1rem;
`

export const DateAndCity = styled.span`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Line = styled.div`
    width: calc(100% + 32px);
    height: 4px;
    margin: 8px -16px;
    background-color: ${({ theme }) => theme.almostBlack};
`

export const Alert = styled.span`
    display: inline-block;
    border: 2px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.red};
    color: ${({ theme }) => theme.white};
    padding: 4px 8px;
    border-radius: 8px;
    font-weight: bold;
`

export const InfoWrapper = styled.div``

export const Place = styled.span`
    display: inline-block;
    margin-bottom: 8px;
`

export const Iframe = styled.iframe`
    width: 100%;
    height: 256px;
    border-radius: 16px;
`

export const ItemInfo = styled.span`
    display: inline-block;
    margin-bottom: 8px;
`