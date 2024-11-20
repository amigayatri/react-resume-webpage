const mapArr = [
    "acre",
    "alagoas",
    "amapa",
    "amazonas",
    "bahia",
    "brasildot",
    "brasil",
    "ceara",
    "distritofederal",
    "espiritosanto",
    "goias",
    "maranhao",
    "matogrossodosul",
    "matogrosso",
    "minasgerais",
    "paraiba",
    "para",
    "parana",
    "pernambuco",
    "piaui",
    "riodejaneiro",
    "riograndedonorte",
    "riograndedosul",
    "rondonia",
    "roraima",
    "santacatarina",
    "saopaulo",
    "sergipe",
    "southamerica",
    "tocantins"
] as const

type mapKey = (typeof mapArr)[number]

export type { mapKey }
export { mapArr }