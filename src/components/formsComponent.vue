<!-- forms-update,insert -->
<template>
  <h1>Hello {{ username }} !!</h1>
  <div>
    
    <h1>User Form</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="emp_id">Employee ID:</label>
        <input type="text" id="emp_id" v-model="this.employees.emp_id" class="input-field">
      </div>
      <div class="form-group">
        <label for="emp_name">Name:</label>
        <input type="text" id="emp_name" v-model="this.employees.emp_name" class="input-field">
      </div>
      <div class="form-group">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model.number="this.employees.age" class="input-field">
      </div>
      <div class="form-group">
        <label for="salary">Salary:</label>
        <input type="number" id="salary" v-model.number="this.employees.salary" class="input-field">
      </div>
      <div class="form-group">
        <label for="dep_id">Department id:</label>
        <input type="number" id="dep_id" v-model.number="this.employees.dep_id" class="input-field">
      </div>      
      <button type="submit" class="submit-button">{{ this.edit ?'Update' : 'Add' }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'UserForm',
  data() {
    return {
      id:'',
      employees:{
        emp_id: '',
        emp_name:'',
        age:'',
        salary:'',
        dep_id:'',
        
      },
      flag:'',
      edit:false,
      baseUrl:import.meta.env.VITE_BASE_URL,    
      username:'',
    };
  },
  created(){
    this.emitter.on("getId",(evt)=>{
      this.id=evt.eventContent;
      console.log(evt);
      this.fetchEmployees();
    });
  //   mounted (){
  //   //   this.emitter = mitt();
  //   //  console.log('1')
  //   this.emitter.on('getId', (evt) => {
  //     console.log(evt,'evt')
  //     // this.id = evt.eventContent;
  //     // console.log(evt)
  //     // this.fetchEmployee();
  //   })
  // },
  },
  mounted() {
  this.username = localStorage.getItem("username");
},
  methods: {
    submitForm() {
      if(this.edit){
         this.updateEmployee(this.id);
          this.resetForm();
          this.emitter.emit('reload',{'eventContent':'Reload'});
        }
        else{
      console.log(this.employees);
       axios.post(`${this.baseUrl}insertion`, this.employees)
        .then(response => {
          console.log('Insertion successful');
          this.emitter.emit('reload',{'eventContent':'Reload'});

        })
        .catch(error => {
          console.error('Error inserting data:', error);
        });
        this.resetForm();
        this.emitter.emit('reload',{'eventContent':'Reload'});
    }
  },
    updateEmployee(item) {
      axios
        .put(`${this.baseUrl}updation/${this.id}`, this.employees)
        .then((response) => {
          console.log(response);
          // Fetch all employees again to update the table
         
          this.resetForm();
          
           // Reset the form after successful update
           
           this.emitter.emit('reload', { 'eventContent': 'Reload' });
          this.updateSuccess = true; // Set updateSuccess to true
          // this.fetchAllEmployees();
        })
        .catch((error) => console.error(error));
    },
    resetForm() {

          this.employees.emp_id = '';
          this.employees.emp_name = '';
          this.employees.age = '';
          this.employees.salary = '';
          this.employees.dep_id='';
          this.edit=false;
    },
    fetchEmployees() {
      console.log("HERE")
      axios
        .get(`${this.baseUrl}selected/${this.id}`)
        .then((response) => {
          this.edit=true;
          this.employees = response.data;
        })
        .catch((error) => console.error(error));
    },
    // updateEmployee(employee) {
    //   this.employee = { ...employee }; // Assign the selected employee to the form data
    // },
  },
};

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
  