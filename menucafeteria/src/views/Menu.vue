<template>
  <div>
    <div>
      <h1>Lista de productos</h1>
      <b-card no-body header="Menú de la Cafetería Perrote">
        <b-list-group flush>
          <b-list-group-item v-for="producto of productos" :key="producto.id"
            >{{ producto.nombre }} - {{ producto.precio }}</b-list-group-item
          >
        </b-list-group>
      </b-card>
    </div>
    <hr />
    <div>
      <h1>Formulario de producto</h1>
      <b-form @submit.prevent>
        <label>Nombre:</label>
        <b-form-input
          type="text"
          placeholder="Nombre del producto"
          v-model="nombre"
        ></b-form-input>
        <b-form-text>Nombre del producto</b-form-text>
        <label>Descripción:</label>
        <b-form-textarea
          rows="3"
          max-rows="8"
          placeholder="Descripción larga del producto"
          v-model="descripcion"
        ></b-form-textarea>
        <b-form-text>Descripción larga del producto</b-form-text>
        <label>Precio:</label>
        <b-form-input
          type="number"
          placeholder="Precio del producto"
          v-model.number="precio"
        ></b-form-input>
        <b-form-text>Precio del producto</b-form-text>
        <label>Foto:</label>
        <b-form-input
          type="url"
          placeholder="Foto del producto"
          v-model="foto"
        ></b-form-input>
        <b-form-text>Foto del producto</b-form-text>
        <b-button @click="grabar">Grabar</b-button>
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
    };
  },
  methods: {
    limpiar() {
      this.nombre = "";
      this.precio = "";
      this.descripcion = "";
      this.foto = "";
    },
    grabar() {
      db.collection("productos").add({
        nombre: this.nombre,
        precio: Number(this.precio),
        descripcion: this.descripcion,
        foto: this.foto,
      });
      this.limpiar();
    },
  },
  firestore: {
    productos: db.collection("productos"),
  },
};
</script>