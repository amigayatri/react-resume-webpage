let variationSteps = 10
class Color {
    constructor(code) {
        this.code = code.substring(1).toUpperCase()
        this.variations = new Set()
        this.#convertFromHexCode(code)
        this.#generateValueVariations()
        this.#generateSaturationVariations()
        this.generateShades()
    }

    #convertFromHexCode (hexaCode) {
        const hexToInt = (color) => parseInt(color, 16)
        const hArr = hexaCode.split('')
        const r = hexToInt(hArr[1]+hArr[2]), g = hexToInt(hArr[3]+hArr[4]), b = hexToInt(hArr[5]+hArr[6])
        this.min = Math.min(r, g, b)
        this.max = Math.max(r, g, b)
        this.red = r
        this.green = g
        this.blue = b
    }

    #generateHex = (red, green, blue) => {
        const intToHex = (color) => color < 16 ? '0' + color.toString(16) : color.toString(16)
        let hex = ['#', intToHex(red), intToHex(green), intToHex(blue)]
        return hex.join('')
    }

    #generateSaturationVariations = () => {
        const max = 255
        const maxDiff = (color) => (max-color)/variationSteps
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
        const minDiff = (color) => (color-min)/variationSteps
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
            let shades = []
            const createShade = (code) => `<li class="shade" style=" background-color: ${code};"><code>${code}</code></li>`
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



let colors = new Map()

const regenerateAll = () => {
    for (let color of colors.values()) {
        color.regenerateVariations()
    }
}

const summaryText = {
    empty: 'Você não tem nenhuma cor adicionada',
    nonEmpty: 'Clique para remover'
}
const removeColor = (color) => {
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

const addColor = (color) => {
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

const addList = (list) => {
    const toAdd = list.toUpperCase().split(' ')
    for (let colorCode of toAdd) {
        if (regex.test(colorCode)) {
            addColor(colorCode)
        }
    }
}


const changeSteps = (newSteps) => {
    variationSteps = newSteps
    if (colors.size > 0) regenerateAll()
}