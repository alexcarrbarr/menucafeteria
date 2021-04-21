<template>
  <div>
    <div>
      <h1>Lista de productos</h1>
      <b-card no-body header="Menú de la Cafetería Perrote">
        <b-list-group flush>
          <b-list-group-item v-for="producto of productos" :key="producto.id">
            {{ producto.nombre }} - {{ producto.precio }}
            <b-button-group class="float-right">
              <b-button
                variant="warning"
                class="mr-1"
                @click="modificar(producto.id)"
                ><b-icon icon="pen-fill"></b-icon>&nbsp;Editar</b-button
              >
              <b-button variant="danger" @click="eliminar(producto.id)"
                ><b-icon icon="trash2-fill"></b-icon>&nbsp;Eliminar</b-button
              >
            </b-button-group>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <hr />
    <div>
      <h1>Formulario de producto</h1>
      <b-form @submit.prevent>
        <b-form-group>
          <label>Nombre:</label>
          <b-form-input
            type="text"
            placeholder="Nombre del producto"
            v-model="nombre"
          ></b-form-input>
          <b-form-text>Nombre del producto</b-form-text>
        </b-form-group>
        <b-form-group>
          <label>Descripción:</label>
          <b-form-textarea
            rows="3"
            max-rows="8"
            placeholder="Descripción larga del producto"
            v-model="descripcion"
          ></b-form-textarea>
          <b-form-text>Descripción larga del producto</b-form-text>
        </b-form-group>
        <b-form-group>
          <label>Precio:</label>
          <b-form-input
            type="number"
            placeholder="Precio del producto"
            v-model.number="precio"
          ></b-form-input>
          <b-form-text>Precio del producto</b-form-text>
        </b-form-group>
        <b-form-group>
          <label>Foto:</label>
          <b-form-input
            type="url"
            placeholder="Foto del producto"
            v-model="foto"
          ></b-form-input>
          <b-form-text>Foto del producto</b-form-text>
        </b-form-group>
        <b-form-group>
          <b-button variant="primary" @click="grabar"
            ><b-icon icon="cloud-arrow-up-fill"></b-icon>&nbsp;Guardar</b-button
          >
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<script>
import { db } from "@/db.js";

export default {
  name: "Menu",
  data() {
    return {
      productos: [],
      nombre: "",
      precio: "",
      descripcion: "",
      foto: "",
      id: "",
    };
  },
  methods: {
    limpiar() {
      this.nombre = "";
      this.precio = "";
      this.descripcion = "";
      this.foto = "";
      this.id = "";
    },
    modificar(id) {
      db.collection("productos")
        .doc(id)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            let data = snapshot.data();
            this.nombre = data.nombre;
            this.precio = data.precio;
            this.descripcion = data.descripcion;
            this.foto = data.foto;
            this.id = id;
          }
        });
    },
    eliminar(id) {
      let confirmacion = confirm(
        "Está seguro que desea eliminar este producto?"
      );
      if (confirmacion) {
        db.collection("productos").doc(id).delete();
      }
    },
    grabar() {
      let datosActualizados = {
        nombre: this.nombre,
        precio: Number(this.precio),
        descripcion: this.descripcion,
        foto: this.foto,
      };
      if (this.id) {
        db.collection("productos").doc(this.id).set(datosActualizados);
      } else {
        db.collection("productos").add(datosActualizados);
      }
      this.limpiar();
    },
  },
  firestore: {
    productos: db.collection("productos"),
  },
};
</script>