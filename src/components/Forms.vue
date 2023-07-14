<template>
  <div class="container">
    <h1>Student Form</h1>
    <form  @submit.prevent="submitForm">
      <br>
      <br>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" @input="validateName" class="input-field">
        <span v-if="nameError" class="error">{{ nameError }}</span>
      </div>

      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="phone" @input="validatePhone" class="input-field">
        <span v-if="phoneError" class="error">{{ phoneError }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="email" @input="validateEmail" class="input-field">
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="total">Total:</label>
        <input type="text" id="total" v-model="total" @input="validateTotal" class="input-field">
        <span v-if="totalError" class="error">{{ totalError }}</span>
      </div>

      <button type="submit" class="submit-button">{{ edit ?'Update' : 'Add' }}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Forms",
  props: {
    initialData: Object, // Accepts initial data from the parent component
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      total: '',
      nameError: '',
      phoneError: '',
      emailError: '',
      totalError: '',
      edit:false
    };
  },
  computed: {
    hasErrors() {
      return (
        this.nameError ||
        this.phoneError ||
        this.emailError ||
        this.totalError
      );
    }
  },
  methods: {
    validateName() {
      if (!/^[a-zA-Z]+$/.test(this.name)) {
        this.nameError = 'Name should contain only alphabets.';
      } else {
        this.nameError = '';
      }
    },
    validatePhone() {
      if (!/^[6-9]\d{9}$/.test(this.phone)) {
        this.phoneError =
          'Phone number should be 10 digits and start with 6, 7, 8, or 9.';
      } else {
        this.phoneError = '';
      }
    },
    validateEmail() {
      if (
        !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
      ) {
        this.emailError = 'Invalid email address.';
      } else {
        this.emailError = '';
      }
    },
    validateTotal() {
      if (!/^\d+(\.\d+)?$/.test(this.total)) {
        this.totalError = 'Total should be a valid floating-point number.';
      } else {
        this.totalError = '';
      }
    },
    submitForm() {
       
        const formData = {
          name: this.name,
          phone: this.phone,
          email: this.email,
          total: this.total
        };
        if(this.edit){
          this.$emit('editstudent', formData);
        }
        else{
        this.$emit('formSubmitted', formData);
        this.resetForm();
        }
      
    },
    resetForm() {
      this.name = '';
      this.phone = '';
      this.email = '';
      this.total = '';
      this.nameError = '';
      this.phoneError = '';
      this.emailError = '';
      this.totalError = '';
    }
  },
  watch: {
    initialData(newData) {
      if (newData) {
        this.name = newData.name;
        this.phone = newData.phone;
        this.email = newData.email;
        this.total = newData.total;
        this.edit = true;
      } else {
        this.resetForm();
        this.edit = false;
      }
    }
  }
};
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
  
  