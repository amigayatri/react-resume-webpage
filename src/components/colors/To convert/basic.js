let sentences = {
    'color-selector': {
        'false': 'Esconder seletor de cor',
        'true' : 'Adicionar uma cor'
    },
    'color-text': {
        'false' : 'Esconder input de lista',
        'true': 'Adicionar várias cores'
    },
    'change-steps' : {
        'false' : 'Parar de alterar número de variações',
        'true': 'Alterar número de variações'
    }
}

const activateButton = (id) => {
    const button = document.getElementById(id)
    const self = document.getElementById('show-'+id)
    const sibilings = self.parentElement.children
    for (let child of sibilings) {
        if (child == self) continue
        child.toggleAttribute('hidden')
    }
    const hidden = button.toggleAttribute('hidden')
    self.innerText = sentences[id][hidden]
}