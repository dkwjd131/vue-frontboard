<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button class="modal-btn" v-on:click=modalBtnClick()> modal </button>
    <button style="margin-left: 10px"> Todo List </button>
    <div class="contain" style="display: flex; justify-content: center;">
      <BaseModal v-if="isModalOpen" />
      <ColumnChart />
      <LCJS :points="points" />
      <LightningChart />
    </div>
  </div>
</template>

<script>
import BaseModal from '../components/BaseModal.vue';
import ColumnChart from '../components/ColumnChart.vue';
import LCJS from '../components/LCJS.vue';
import LightningChart from '../components/LightningChart.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // eslint-disable-next-line vue/no-unused-components
  components: { BaseModal, ColumnChart, LCJS, LightningChart },
  data() {
    return {
      isModalOpen: false,
      points: [
        { x: 0, y: 0 },
        { x: 1, y: 7 },
        { x: 2, y: 3 },
        { x: 3, y: 10 },
        { x: 4, y: 12 },
        { x: 5, y: 9 },
        { x: 6, y: 15 }
      ]
    }
  },
  methods: {
    modalBtnClick() {
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
