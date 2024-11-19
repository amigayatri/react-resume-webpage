const brasilArr = [
    "brasil",
    "braziliancalendar",
    "pandeiro",
    "riodejaneiro",
    "samba"
] as const

type brasilKey = (typeof brasilArr)[number]

export type { brasilKey }
export { brasilArr }