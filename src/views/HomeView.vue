<!-- localStorage -->
<template>
  <div>
      <h1>Login Form</h1>
      <br>
      <form @submit.prevent="Login">
          <div class="form-group">
          <label for="username" >Username</label>
          <input type="text" id="username" v-model="username" class="input-field" required>
          </div>        
          <div class="form-group">
          <label for="password" >Password</label>
          <input type="password" id="password" v-model="password" class="input-field" required>
          </div> 
          <button type="submit" class="submit-button">Login</button>
      </form>
  </div>
  </template>
  <script>
  export default{
      data(){
        return{
          username:null,
          password:null,
        }
  
      },
      methods:{
          Login(){
              localStorage.setItem("username",this.username);
              this.resetForm();
              this.$router.push('/employeePortal');  
          },
          resetForm(){
            this.username= "";
            this.password= "";
          }
  
      }
  }
  </script>
  <style>
.form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .input-field {
    width: 300px;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .submit-button {
    background-color: #699ec9;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .submit-button:hover {
    background-color: #75cc6e;
  }
  </style>