<template>
    <div class="container">
      <h1>Employee Form</h1>
      <form  @submit.prevent="submitForm" method ="post">
        <br>
        <br>
        <div class="form-group">
          <label for="emp_id">Employee ID:</label>
          <input type="text" id="emp_id" v-model="emp_id" @input="validateID" class="input-field">
          <span v-if="idError" class="error">{{ idError }}</span>
        </div>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" @input="validateName" class="input-field">
          <span v-if="nameError" class="error">{{ nameError }}</span>
        </div>
  
        <div class="form-group">
          <label for="age">Age:</label>
          <input type="text" id="age" v-model="age" @input="validateAge" class="input-field">
          <span v-if="phoneError" class="error">{{ ageError }}</span>
        </div>
  
        <div class="form-group">
          <label for="salary">Salary:</label>
          <input type="text" id="salary" v-model="salary" @input="validateSalary" class="input-field">
          <span v-if="salaryError" class="error">{{ salaryError }}</span>
        </div>
  
        <button type="submit" class="submit-button" >Create</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "EmpForms",

    data() {
      return {
        emp_id: '',
        name: '',
        age: '',
        salary: '',
        idError: '',
        nameError: '',
        ageError: '',
        salaryError: '',
      
      }
    },
    computed: {
      hasErrors() {
        return (
          this.idError ||
          this.nameError ||
          this.ageError ||
          this.salaryError
        );
      }
    },
    methods: {
      validateID() {
        if (!/^[a-zA-Z0-9]+$/.test(this.emp_id)){
          this.idError = 'Name should contain both alphabets and numbers.';
        } else {
          this.idError = '';
        }
      },
      validateName() {
        if (!/^[a-zA-Z]+$/.test(this.name)) {
          this.nameError = 'Name should contain only alphabets.';
        } else {
          this.nameError = '';
        }
      },
      validateAge() {
        if (!/^([2-9][0-9]|100)$/.test(this.age)) {
          this.ageError =
            'Age should be between 20 to 100';
        } else {
          this.ageError = '';
        }
      },
      validateSalary() {
    const isValidSalary = /^\d+$/.test(this.salary) && parseInt(this.salary) > 1000;

    if (!isValidSalary) {
      this.salaryError = 'Salary should be greater than 1000 and contain only numbers.';
    } else {
      this.salaryError = '';
    }
  },
      submitForm() {
         
          const formData = {
            emp_id:this.emp_id,
            emp_name: this.name,
            age: this.age,
            salary: this.salary,
          }

          this.$emit('formSubmitted', formData);
          this.resetForm();

    
        
      },
      resetForm() {
        this.emp_id = '';
        this.name = '';
        this.age = '';
        this.salary = '';
        this.idError = '';
        this.nameError = '';        
        this.ageError = '';
        this.salaryError = '';
      }
    }
    // watch: {
    //   initialData(newData) {
    //     if (newData) {
    //       this.name = newData.name;
    //       this.phone = newData.phone;
    //       this.email = newData.email;
    //       this.total = newData.total;
    //       this.edit = true;
    //     } else {
    //       this.resetForm();
    //       this.edit = false;
    //     }
    //}
    }
  
  </script>
  
    
    <style>
    .container {
      max-width: 1000px;
      margin: 1px;
      background-color: darkgray;
      padding-right : 200px;
      padding-left:200px;
      padding-top:100px;
      padding-bottom:100px;
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
    
    </style>
    
    