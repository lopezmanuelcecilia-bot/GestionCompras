const listaDeCompras = [];

const agregarProducto = (producto) => {
    if (!listaDeCompras.includes(producto)) {
        listaDeCompras.push(producto);
    }
};

const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto);
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
    }
};

const mostrarLista = () => {
    console.log("--- LISTA DE COMPRAS ---");
    if (listaDeCompras.length === 0) {
        console.log("La lista está vacía.");
        return;
    }
    listaDeCompras.forEach(producto => console.log("- " + producto));
};

agregarProducto("Leche");
agregarProducto("Pan");
agregarProducto("Leche");
mostrarLista();

eliminarProducto("Pan");
mostrarLista();
