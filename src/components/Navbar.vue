<template>
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">BIODATA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/index">Profil</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/pendidikan">History Pendidikan</router-link>
       </li>
      </ul>
    </div>
  </div>
</nav>
</div>
</template>

<script>
export default {};
</script>

<style>
</style>