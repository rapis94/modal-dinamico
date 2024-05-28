'use strict'
class BtnModal {
    constructor(label = 'Aceptar', clase = 'btn-primary', id = '', eventClick = function () { }) {
        this.label = label;
        this.clase = clase;
        this.eventClick = eventClick;
        this.DOMid = id;
        this.dom;
    }

    render() {
        let btn = document.createElement("button");
        console.log(btn);
        btn.addEventListener('click', this.eventClick);
        btn.innerHTML = this.label;
        if (this.DOMid != '') {
            btn.setAttribute('id', this.DOMid);
        }
        btn.classList.add("btn");
        btn.classList.add(this.clase)

        this.dom = btn;
        return btn;
    }

    destroy() {
        document.removeChild(this.dom);
    }
}


//El modal recibe entre otras propiedades mas simples de entender, un array de objetos BtnModal.
//Ver ejemplo de implementación para mas detalles
function mostrarModal(texto, titulo, btns = new Array()) {
    $("#modal").modal("show");
    $("#modal-label").html(titulo);
    $("#modal-body").html(texto);
    console.log(btns);
    if (btns.length > 0) {
        let botonera = document.getElementById("modal-botonera");
        btns.map((btn) => {
            let render = btn.render();
            botonera.appendChild(btn.dom);
        })
    }

}

function cerrarModal() {
    $("#modal").modal("hide");
    $("#modal-label").html("");
    $("#modal-body").html("");
    $("#modal-botonera").html("");
}
