<template>
    <div>
      <!-- Pass the employee data as props to the EmpUpdateForms component -->
      <EmpUpdateForms
        :emp_id="employee.emp_id"
        :emp_name="employee.emp_name"
        :age="employee.age"
        :salary="employee.salary"
        @formSubmitted="updateEmployee"
      />
      <button @click="resetForm">Reset Form</button>
      <div>
        <h2>Employee Details</h2>
        <p v-if="employee">Employee ID: {{ employee.emp_id }}</p>
        <p v-if="employee">Name: {{ employee.emp_name }}</p>
        <p v-if="employee">Age: {{ employee.age }}</p>
        <p v-if="employee">Salary: {{ employee.salary }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import EmpUpdateForms from "@/components/EmpUpdateForms"; // Update the path based on your project structure
  import axios from "axios";
  
  export default {
    name: "EmployeeUpdateFormDemo",
    components: {
      EmpUpdateForms,
    },
    data() {
      return {
        employee: {
          emp_id: "",
          emp_name: "",
          age: "",
          salary: "",
        },
      };
    },
    methods: {
      updateEmployee(formData) {
        axios
          .patch(`http://127.0.0.1:3333/updation/${this.employee.emp_id}`, formData)
          .then((response) => {
            console.log(response);
            // Show a success message or perform any additional actions
            this.employee = { ...formData }; // Update employee data with the updated values
          })
          .catch((error) => console.error(error));
      },
      resetForm() {
        // Reset the form by clearing the employee data
        this.employee = {
          emp_id: "",
          emp_name: "",
          age: "",
          salary: "",
        };
      },
    },
  };
  </script>
  
  <style>
  /* Your styles here */
  </style>
  