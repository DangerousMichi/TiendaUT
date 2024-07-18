class Producto {
    constructor(producto) {
        this.idproducto = producto.idproducto;
        this.nombre = producto.nombre;
        this.descripcion = producto.descripcion;
        this.precio = parseFloat(producto.precio);
        this.stock = parseInt(producto.stock);
    }

    set idproducto(idproducto) {
        this._idproducto = idproducto;
    }

    set nombre(nombre) {
        if (typeof nombre === 'string' && nombre.trim().length > 0) {
            this._nombre = nombre;
        } else {
            console.error("Nombre inválido");
            this._nombre = null;
        }
    }

    set descripcion(descripcion) {
        if (typeof descripcion === 'string') {
            this._descripcion = descripcion;
        } else {
            console.error("Descripción inválida");
            this._descripcion = null;
        }
    }

    set precio(precio) {
        if (typeof precio === 'number' && precio >= 0) {
            this._precio = precio;
        } else {
            console.error("Precio inválido");
            this._precio = null;
        }
    }

    set stock(stock) {
        if (Number.isInteger(stock) && stock >= 0) {
            this._stock = stock;
        } else {
            console.error("Stock inválido");
            this._stock = null;
        }
    }

    get idproducto() {
        return this._idproducto;
    }

    get nombre() {
        return this._nombre;
    }

    get descripcion() {
        return this._descripcion;
    }

    get precio() {
        return this._precio;
    }

    get stock() {
        return this._stock;
    }

    get obtenerDatos() {
        return {
            idproducto: this.idproducto,
            nombre: this.nombre,
            descripcion: this.descripcion,
            precio: this.precio,
            stock: this.stock
        };
    }
}

module.exports = Producto;
