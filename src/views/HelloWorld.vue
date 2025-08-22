<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="modal-btn" v-on:click = modalBtnClick()> modal </button>
    <button style="margin-left: 10px"> Todo List </button>
    <div class="contain">
      <BaseModal v-if="isModalOpen"/>
       <ColumnChart/>
    </div>
  </div>
</template>

<script>
import BaseModal from '../components/BaseModal.vue';
import ColumnChart from '../components/ColumnChart.vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{BaseModal,ColumnChart},
  data(){
    return{
      isModalOpen: false
    }
  },
  methods:{
    modalBtnClick(){
      this.isModalOpen = !this.isModalOpen;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.contain {
  border: 1px solid rgb(0, 0, 0);
  min-height: 500px;
}
.modal-btn {
  margin-bottom: 20px;
}
</style>
