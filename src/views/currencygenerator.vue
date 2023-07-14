<template>
    <div>
      <label for="salary">Salary:</label>
      <input type="text" id="salary" v-model="salary" v-comma-separation />
      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        salary: "",
       };
    },


  };
  </script>