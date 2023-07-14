<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<template>
  <div class="wrapper">
    <nav>
      <ul class="nav-list">
        <header>
        <img alt="NGP logo" class="logo" src="https://media.glassdoor.com/sql/2367871/ngp-web-smart-squarelogo-1582178988827.png" width="50" height="50" />
        <h1>Task completion</h1>
      </header>
      <br>
      <br>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/studenttable">Display Student Table</RouterLink></li>
        <li><RouterLink to="/textarea">Text Count - Computed</RouterLink></li>
        <li><RouterLink to="/textmethod">Text Count-Methods</RouterLink></li>
        <li><RouterLink to="/table">Form</RouterLink></li>
        <li><RouterLink to="/axiosview">Axios - Display</RouterLink></li>
        <li><RouterLink to="/createform">Axios - Create</RouterLink></li>
        <li><RouterLink to="/axiosupdate">Axios - Update</RouterLink></li>
        <li><RouterLink to="/employeePortal">Single Page Application</RouterLink></li>   
        <li><RouterLink to="/currency">Custom Dirrectives</RouterLink></li>     
        <!-- <li><table-view :formData="formData"></table-view></li>-->
      </ul> 
    </nav>
    <div class="content">
      
      <RouterView />
    </div>
  </div>
</template>



<style scoped>
.wrapper {
  display: flex;
}

.nav-list {
  list-style: none;
  padding: 0;
  width: 400px;
  height: 1000px;
  overflow-y: auto;
  border-right: 8px solid #ccc;
}

.nav-list li {
  margin-bottom: 8rem;
}

.content {
  flex-grow: 1;
  padding: 3rem;
}

/* Add styles to separate the titles and content */
.nav-list header {
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 8px solid #ccc;
}

.nav-list header img {
  margin-right: 1rem;
}

.nav-list header h1 {
  font-size: 1.5rem;
}

.nav-list li {
  padding: 1rem;
  background-color: #0c0b0b;
  border-radius: 5px;
}

.nav-list li:not(:last-child) {
  margin-bottom: 1rem;
}

</style>

