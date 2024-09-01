let variationSteps = 10
class Color {
    code: string
    variations: Set<string>
    min: number
    max: number 
    red: number 
    green: number 
    blue: number 
    constructor(code: string) {
        this.code = code.substring(1).toUpperCase()
        this.variations = new Set()
        const [r, g, b] = this.#convertFromHexCode(code)
        this.min = Math.min(r, g, b)
        this.max = Math.max(r, g, b)
        this.red = r
        this.green = g
        this.blue = b
        this.#generateValueVariations()
        this.#generateSaturationVariations()
        this.generateShades()
    }

    #convertFromHexCode (hexaCode: string) {
        const hexToInt = (color: string) => parseInt(color, 16)
        const hArr = hexaCode.split('')
        const r = hexToInt(hArr[1]+hArr[2]), g = hexToInt(hArr[3]+hArr[4]), b = hexToInt(hArr[5]+hArr[6])
        return [r, g, b]
    }

    #generateHex = (red:number, green:number, blue:number) => {
        const intToHex = (color: number) => color < 16 ? '0' + color.toString(16) : color.toString(16)
        const hex = ['#', intToHex(red), intToHex(green), intToHex(blue)]
        return hex.join('')
    }

    #generateSaturationVariations = () => {
        const max = 255
        const maxDiff = (color:number) => (max-color)/variationSteps
        const redDiff = maxDiff(this.red), blueDiff = maxDiff(this.blue), greenDiff = maxDiff(this.green)
        for (let i = 0; i <= variationSteps; i++) {
            const redNew = this.red + Math.trunc(i*redDiff)
            const greenNew = this.green + Math.trunc(i*greenDiff)
            const blueNew = this.blue + Math.trunc(i*blueDiff)
            const hex = this.#generateHex(redNew, greenNew, blueNew).toUpperCase()
            this.variations.add(hex)
        }
    }

    #generateValueVariations = () => {
        const min = 0
        const minDiff = (color: number) => (color-min)/variationSteps
        const redDiff = minDiff(this.red), blueDiff = minDiff(this.blue), greenDiff = minDiff(this.green)
        for (let i = 0; i < variationSteps; i++) {
            const redNew = min + Math.trunc(i*redDiff)
            const greenNew = min + Math.trunc(i*greenDiff)
            const blueNew = min + Math.trunc(i*blueDiff)
            const hex = this.#generateHex(redNew, greenNew, blueNew).toUpperCase()
            this.variations.add(hex)
        }
    }
    generateArray = () => {
        return Array.from(this.variations)
    }

    generateShades () {
        const section = document.getElementById('color-variations')
        const oldSelf = document.getElementById('var-'+this.code)
        if (oldSelf != null) oldSelf.remove()
        const generateShades = () => {
            const shades = []
            const createShade = (code:string) => `<li class="shade" style=" background-color: ${code};"><code>${code}</code></li>`
            for (const color of this.variations) {
                shades.push(createShade(color))
            }
            return shades.join('')
        }
        const generateSection = () => {
            return (`
                <div id="var-${this.code}" class="color-wrapper">
                    <h3 style="color: ${this.code};">#${this.code}</h3>
                    <ul class="variation-list">
                        ${generateShades()}
                    </ul>
                </div>
            `)
        }
        section.insertAdjacentHTML('afterbegin', generateSection())
    }

    regenerateVariations = () => {
        this.variations.clear()
        this.#generateValueVariations()
        this.#generateSaturationVariations()
        this.generateShades()
    }
}



const colors = new Map()

const regenerateAll = () => {
    for (const color of colors.values()) {
        color.regenerateVariations()
    }
}

const removeColor = (color:string) => {
    const base = document.getElementById(`base-${color}`)
    const vars = document.getElementById(`var-${color}`)
    base.remove()
    vars.remove()
    colors.delete('#'+color)
    if (colors.size == 0) {
        const summary = document.getElementById('summary-list')
        summary.innerText = summaryText.empty
    }
}

const addColor = (color:string) => {
    color = color.toUpperCase()
    if (colors.has(color)) return
    colors.set(color, new Color(color))
    const list = document.getElementById('list')
    const newBaseColor = (code) => { return `<code id="base-${code}" onClick="removeColor('${code}')">#${code}</code>`}
    list.insertAdjacentHTML('afterbegin', newBaseColor(color.substring(1)))
    if (colors.size == 1) {
        const summary = document.getElementById('summary-list')
        summary.innerText = summaryText.nonEmpty
    }
}

const regex = new RegExp(/^#([A-Fa-f0-9]{6})$/);

const addList = (list:string) => {
    const toAdd = list.toUpperCase().split(' ')
    for (let colorCode of toAdd) {
        if (regex.test(colorCode)) {
            addColor(colorCode)
        }
    }
}

const changeSteps = (newSteps: number) => {
    variationSteps = newSteps
    if (colors.size > 0) regenerateAll()
}