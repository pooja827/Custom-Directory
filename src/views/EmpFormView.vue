<template>
    <div >
        <EmpForms @formSubmitted="formscreated" />
        <br>
        <br>
        <router-link to="/axiosview" class="submit-button">View table</router-link>

    </div>
</template>
<script>
import EmpForms from '@/components/EmployeeCreateForm.vue'
import axios from 'axios'
export default{
    data(){
        return{
        employees:{},
        };
    },
    components:{
        EmpForms
    },
    methods:{       
    formscreated(data){
            this.employees={...data};     
            console.log(this.employees);  
            axios.post('http://127.0.0.1:3333/insertion',this.employees)
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
