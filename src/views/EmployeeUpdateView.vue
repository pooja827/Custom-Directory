<template>
    <div >
        <EmpForms @formSubmitted="formsupdated" />
        <br>
        <br>
        <router-link to="/axiosview" class="submit-button">View table</router-link>

    </div>
</template>
<script>
import updateFormsForms from '@/components/EmployeeUpdateForm.vue'
import axios from 'axios'
export default{
    data(){
        return{
        employeesupdate:{},
        };
    },
    components:{
        updateForms
    },
    methods:{       
    formsupdated(data){
            this.employeesupdate={...data};     
            console.log(this.employeesupdate);  
            axios.post('http://127.0.0.1:3333/insertion',this.employeesupdate)
            .then((response)=>console.log(response))
          

          }
          }
        }

</script>
<style>
    .submit-button {
      background-color: #699ec9;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
</style>
