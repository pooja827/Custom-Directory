<template>
  <h1>Department Table</h1>
  <br />
  <h3>Here we have displayed the data from the (AdonisJS) departments DB creation.</h3>
  <div id="app">
    <br />
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Employee ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in employees" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.emp_id }}</td>
          <td>{{ item.emp_name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.salary }}</td>
          <td><button @click="updateEmployee(item)">Update</button></td>
          <td><button @click="deleteEmployee(item.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <div v-if="employee">
      <form @submit.prevent="submitUpdate">
        <div class="form-group">
          <label for="emp_id">Employee ID(department):</label>
          <input type="text" id="emp_id" v-model="employee.emp_id" class="input-field" />
        </div>
        <div class="form-group">
          <label for="emp_name">Name:</label>
          <input type="text" id="emp_name" v-model="employee.emp_name" class="input-field" />
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <input type="text" id="age" v-model="employee.age" class="input-field" />
        </div>
        <div class="form-group">
          <label for="salary">Salary:</label>
          <input type="text" id="salary" v-model="employee.salary" class="input-field" />
        </div>
        <button type="submit" class="submit-button">Update</button>
      </form>
    </div>
    <div v-if="updateSuccess" class="success-message">
      Updation successful!
    </div>
    <RouterLink to="/createform" class="submit-button">Add</RouterLink><br />
    <br />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employees: [],
      employee: null,
      updateSuccess: false,
    };
  },
  methods: {
    submitUpdate() {
      axios
        .put(`http://127.0.0.1:3333/updation/${this.employee.id}`, this.employee)
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
    },
    fetchAllEmployees() {
      axios
        .get('http://127.0.0.1:3333/model')
        .then((response) => {
          this.employees = response.data;
        })
        .catch((error) => console.error(error));
    },
    updateEmployee(employee) {
      this.employee = { ...employee }; // Assign the selected employee to the form data
    },
    deleteEmployee(id) {
      axios
        .delete(`http://127.0.0.1:3333/Deletion/${id}`)
        .then((response) => {
          console.log(response);
          this.fetchAllEmployees();
        })
        .catch((error) => console.error(error));
    },
  },
  mounted() {
    this.fetchAllEmployees();
  },
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
  padding: 40px;
  text-align: left;
  color: rgb(243, 231, 231);
  background-color: black;
}

th {
  background-color: #7eb387;
  padding: 20px;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
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
