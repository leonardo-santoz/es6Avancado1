class MensagemView {

    constructor(elemento){
        
        this._elemento = elemento
    }

    _template(model){

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : `<p></p>`
    }

    update(model){

        this._elemento.InnerHTML = this._template(model)
    }

}