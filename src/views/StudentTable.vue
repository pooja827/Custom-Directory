<template>
    <div id ="app">
      <h1>Student Table</h1>
      <br>
      <br>
      <br>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </tbody>
      </table>
     
    </div>
   
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Pooja', email: 'pooja@gmail.com', age: 20 },
          { id: 2, name: 'Dharshini', email: 'dharshini@gmail.com', age: 25 },
          // Add more objects as needed
        ]
      };
    }
  };
  </script>
  
  <style>
  
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    table {
      border-collapse: collapse;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }
  
    th,
    td {
      border: 1px solid #ccc;
      padding: 8px;
      text-align: left;
    }
  
    th {
      background-color: #7eb387;
    }
  
    tr {
      background-color: #080808;
      color:rgb(240, 240, 241)
    }
  
  </style>
  