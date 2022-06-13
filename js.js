const btn = document.querySelector('#total');
const plato = document.querySelector('#plato')
const bebida = document.querySelector('#bebida')

btn.onclick = (event) => {
    event.preventDefault();
    const platoSeleccionado = [].filter
    .call(plato.options, option => option.selected)
    .map(option => option.text);
    const bebidaSeleccionada = [].filter
    .call(bebida.options, option => option.selected)
    .map(option => option.text);
    swal({
        title: "Pedido enviado!",
        text: `Tu orden es: ${platoSeleccionado} con ${bebidaSeleccionada}`,
        icon: "success",
        button: "Realizar Otro Pedido",
      });
}