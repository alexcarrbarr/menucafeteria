<template>
  <div id="app">
    <b-container>
      <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-navbar-brand>Perrote</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
            <b-nav-item to="/menu">Menú</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <br />
      <router-view />
      <hr />
      <p>Hecho por ACARRASCO (C)</p>
    </b-container>
  </div>
</template>

<style>
</style>
