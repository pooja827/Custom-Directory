<template>
  <div class="container">
    <h1>Employee Updation Form</h1>
    <br>
   
    <div>
      <div class="form-group">
        <label for="id">ID:</label>
        <input type="text" v-model="id" placeholder="Enter Employee ID" class="input-field">
      </div>
      
      <button class="submit-button" @click="fetchEmployee">Fetch</button>
      <br>
      <br>
      <div id="myElement"></div>
      <h2>Details</h2>
      <div v-if="employee">
        <form @submit.prevent="updateEmployee">
          <div class="form-group">
            <label for="emp_id">Employee ID(department):</label>
            <input type="text" id="emp_id" v-model="employee.emp_id" class="input-field">
          </div>
          <div class="form-group">
            <label for="emp_name">Name:</label>
            <input type="text" id="emp_name" v-model="employee.emp_name" class="input-field">
          </div>
          <div class="form-group">
            <label for="age">Age:</label>
            <input type="text" id="age" v-model="employee.age" class="input-field">
          </div>
          <div class="form-group">
            <label for="salary">Salary:</label>
            <input type="text" id="salary" v-model="employee.salary" class="input-field">
          </div>
          <button type="submit" class="submit-button">Update</button>
        </form>
      </div>
      <div v-if="updateSuccess" class="success-message">
        Updation successful!
      </div>
    </div>

    <br>
    <br>
    <router-link to="/axiosview" class="submit-button">View</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      id: '',
      employee: null,
      employees: [], // Array to store all employees
      updateSuccess:false,
    };
  },
  methods: {
    fetchEmployee() {
      axios
        .get(`http://127.0.0.1:3333/selected/${this.id}`)
        .then((response) => {
        
          if(response.data.length>10){          
            document.getElementById("myElement").innerHTML = response.data; 

          }
           this.employee = response.data;
         
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateEmployee() {
      axios
        .patch(`http://127.0.0.1:3333/updation/${this.id}`, this.employee)
        .then((response) => {
          console.log(response);
          // Fetch all employees again to update the table
          this.fetchAllEmployees();
          this.resetForm(); // Reset the form after successful update
          this.updateSuccess = true; // Set updateSuccess to true
          setTimeout(() => {
            this.updateSuccess = false; // Reset updateSuccess after 3 seconds
          }, 3000);
        })
        .catch((error) => console.error(error));
    },
    resetForm() {
      this.employee = null; // Clear the employee data
      this.id = ''; // Clear the ID input field
    },

    fetchAllEmployees() {
      axios
        .get('http://127.0.0.1:3333/model')
        .then((response) => {
          this.employees = response.data;
        })
        .catch((error) => console.error(error));
    }
  },
  mounted() {
    this.fetchAllEmployees();
  }
}
</script>


<style scoped>
.container {
  max-width: 1000px;
  margin: 1px;
  background-color: darkgray;
  padding-right: 500px;
  padding-left: 200px;
  padding-top: 100px;
  padding-bottom: 100px;
}

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
  font-size: 20px;
  border-radius: 8px;
  border: 5px solid #93d6b7;
}

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
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

.success-message {
  color: green;
  margin-top: 10px;
}
</style>
