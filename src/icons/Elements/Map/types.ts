const mapArr = [
    "acre",
    "alagoas",
    "amapa",
    "amazonas",
    "bahia",
    "brasil",
    "brasildot",
    "ceara",
    "distritofederal",
    "espiritosanto",
    "goias",
    "maranhao",
    "matogrosso",
    "matogrossodosul",
    "minasgerais",
    "para",
    "paraiba",
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
] as const;

type mapKey = (typeof mapArr)[number];

export type { mapKey };
export { mapArr };
