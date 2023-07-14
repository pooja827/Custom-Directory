<template>
  
  <div>
    
    <Forms :initialData="editItemData" @formSubmitted="display" @editstudent="saveItem" />
    <br>
    <br>
    <br>
    <strong><h1>Student Table</h1></strong>
    <br>
  
    <table class="table">
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in details" :key="index">
          <!-- <td :title="item.name">{{ item.name | truncateName(10) }}</td> -->
          <td :title="item.name">{{ $filters.truncateName(item.name,10) }}</td> 
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td :style="{ color: getTotalColor(item.total) }">{{ item.total }}</td>
          <td>
            <button @click="editItem(item,index)">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Forms from '@/components/forms.vue';

export default {
  name: 'Table',
  components: {
    Forms
  },
  data() {
    return {
      details: [],
      editItemData: null,
      editIndex:null
    };
  },
  methods: {
    display(data) {
      this.details.push(data);
    },
    getTotalColor(total) {
      if (total >= 80) {
        return 'green';
      } else if (total >= 35) {
        return 'orange';
      } else {
        return 'red';
      }
    },
    editItem(item,index) {
      this.editItemData = { ...item};
      this.editIndex=index;
    },
    saveItem(formData) {
      this.details[this.editIndex]=formData;
      this.editItemData = null;
    },

  }
};
</script>
  
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th,
  td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #57ac88;
    font-weight: bold;
  }
  
  td {
    background-color: #0a0a0a;
    color:#ccc
  }
  
  th,
  td {
    border: 1px solid #ccc;
  }
  
  /* Hover effect */
  tbody tr:hover {
    background-color: #d85656;
  }
  
  /* Alternating row colors */
  tbody tr:nth-child(even) {
    background-color: #f6f6f6;
  }
  
  /* Table header styles */
  .table-header {
    text-transform: uppercase;
  }
  
  /* Table cell alignment */
  .text-right {
    text-align: right;
  }
  
  .text-center {
    text-align: center;
  }
  
  /* Table cell colors */
  .success {
    background-color: #dff0d8;
    color: #90ca91;
  }
  
  .warning {
    background-color: #ccf0f0;
    color: #7cb1ca;
  }
  
  .error {
    background-color: #f2dede;
    color: #a94442;
  }
  .full-name-tooltip {
    position: absolute;
    top: -20px;
    left: 0;
    padding: 4px;
    background-color: #000;
    color: #fff;
    border-radius: 4px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  /* Show tooltip on hover */
  td:hover .full-name-tooltip {
    opacity: 1;
  }
  </style>
  
  