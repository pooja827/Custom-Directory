<template>
    <div>
        <UserForm />
        
        <br>
        <br>
        <tableForm/>
    </div>
</template>

<script>
import tableForm from '@/components/tableComponent.vue'
import UserForm from '@/components/formsComponent.vue'


export default {
    components: {
        tableForm,
        UserForm
    }
}
</script>