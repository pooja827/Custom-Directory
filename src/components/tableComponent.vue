<!-- table-delete ,display,dropdown,search -->
<template>
  <h1>Employee Table</h1>
  <br>
  <div id="dropdown">
    <h2>DEPARTMENT FILTER</h2>
    <select v-model="DeptOptions" @click="getDepartment">
      <option value="" disabled selected>Choose an department</option>
      <option v-for="(item,index) in depts" :key="index" :value="item.deptid">{{ item.dept_name }}</option>
    </select>
    </div>
    <br>
    <br>
    <br>
    <h2>SEARCH FILTER</h2>
    <div id="search bar">
      <input type="text" class="input-field" v-model="searchQuery" placeholder="Search records.." > 
      <br>
      <br>
      <br>

      <button  class="submit-button" @click="searchDetails">Search</button> 
      <div id="message">{{ results }}</div>    
    </div>
    <br>
    <br>
    <br>
    <div id="table" v-if="flag">
      <table>
        <thead>
          <tr>
            <th v-for="(key, index) in headers" :key="index">{{ key }}</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in employee" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.emp_id }}</td>
            <td>{{ item.emp_name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.salary }}</td>
            <td>{{ item.dep_id }}</td>
            <td><button @click="updateEmployee(item.id)">Update</button></td>
            <td><button @click="deleteEmployee(item.id)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
 
</template>

<script>
import axios from 'axios';


export default {
  name: 'tableForm',


  data() {
    return {
      arr: [],
      employee: [],
      flag: '',
      baseUrl: import.meta.env.VITE_BASE_URL,
      DeptOptions: '',
      depts: null,
      searchQuery: '',
      headers:null,
      results:'',
     
    };
  },
  created() {
   this.emitter.on('reload',this.select);
   this.select();
  },
  methods: {
    getDepartment() {
      //this.activeInstrument = instrument;
      axios.get(`${this.baseUrl}modelDepartment`)
    .then((response) => {
        this.depts=response.data;
        console.log(this.depts);
      }).catch((err) => {
        console.log(err);
      })
    
     // http://127.0.0.1:3333/selectAllDept
     //selectedDept
     console.log(this.DeptOptions)
     axios.get(`${this.baseUrl}joinByID/${this.DeptOptions}`)
    .then((response) => {
        this.employee=response.data;
        console.log(this.employee);
      }).catch((err) => {
        console.log(err);
      })
    },
    
    select() {
      axios.get(`${this.baseUrl}model`)
        .then(response => {
          this.employee = response.data;
          console.log(this.employee);
          this.headers = Object.keys(this.employee[0]).slice(0,6);
          console.log(this.headers);
          this.flag = true;
        })
        .catch((error) => {
          console.error(error);
          this.flag = false;
        });
    },
    deleteEmployee(id) {
      axios
        .delete(`${this.baseUrl}Deletion/${id}`)
        .then((response) => {
          console.log(response);
          this.select();
        })
        .catch((error) => console.error(error));
    },
    updateEmployee(item) {
    console.log(this.emitter)
     this.emitter.emit('getId', { 'eventContent': item });
      this.select()
    },

    searchDetails() {
  // console.log(this.searchQuery);
  // var filter = this.searchQuery.toLowerCase();
  // this.searchQuery = "";
  // var table = document.getElementById("table"); // Add this line to get the table element
  // var rows = table.getElementsByTagName("tr");
  // var ctr = 0;
  // for (var i = 1; i < rows.length; i++) {
  //   var row = rows[i];
  //   var cells = row.getElementsByTagName("td"); // Fix the method name here
  //   var found = false;

  //   for (var j = 0; j < cells.length; j++) {
  //     var cell = cells[j];
  //     if (cell.innerHTML.toLowerCase().indexOf(filter) > -1) {
  //       found = true;
  //       break;
  //     }
  //   }
  //   row.style.display = found ? "" : "none";
  //   if (row.style.display) {
  //     ctr += 1;
  //   }
  // }
  // if (ctr == rows.length - 1) {
  //   document.getElementById("message").innerHTML = "No records Found";
  // } else {
  //   document.getElementById("message").innerHTML = "";
  // }
  
  axios
        .get(`${this.baseUrl}searchdet/?search=${this.searchQuery}`)
        .then((response) => {
          console.log(response)

          this.employee=response.data;
          console.log(this.employee);
          if(this.employee.length == 0){
          this.results ="No Records Found"
        }
        //  this.select();
        })
        .catch((error) => console.error(error));

},


  },
};
</script>
<style>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #e9f0ed;
}

th {
  background-color: #5cbb9f;
  font-weight: bold;
}

tr {
  background-color: #0e0d0d;
  color:rgb(248, 246, 246);
}
.input-field {
    width: 300px;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #88cfb4;
  }
#dropdown {
  display: inline-block;
  position: relative;
}


select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #131111;
  color: #eeeaea;
}

select:focus {
  outline: none;
  border-color: #5cbb9f;
}

/* Style the dropdown arrow */
select::-ms-expand {
  display: none;
}

select::-webkit-select-placeholder {
  color: #999;
}

select::-moz-placeholder {
  color: #999;
}

select::-moz-placeholder {
  color: #999;
}

select::-ms-placeholder {
  color: #999;
}
</style>
