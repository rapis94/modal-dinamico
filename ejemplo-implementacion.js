//primero vamos a tener que definir nuestro array de botones


//1er parámetro: es el nombre que mostrará el botón.
//2do parámetro: es la clase bootstrap que querramos agregar para el color, por ejemplo el dato default "btn-primary"
//3er parámetro: es un id que quieras agregarle al DOM, si lo envias como cadena vacía se obviará el atributo
//4to parámetro: es una función que pueda ejecutarse con el evento "onclick"

const botones = new Array();
    botones.push(
        new btnModal("Volver al inicio", "btn-danger", '', function () {
            window.location.href = "index.php";
        }),
        new btnModal("Volver a otra sección", "btn-success", '', function () {
            window.location.href = "index.php?ubicacion=productos&categoria=";
        })
    );

//finalmente enviamos todo la información a traves de mostralModal
//1er parámetro: texto de la alerta.
//2do parámetro: título de la alerta.
//3er parmáetro: el array de botones.

mostrarModal("Item agregado con éxito a tu pedido", "Éxito!", botones);
