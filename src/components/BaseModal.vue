<template>
  <dialog-drag>
    <ColumnChart />
  </dialog-drag>
</template>
<script>
import DialogDrag from 'vue-dialog-drag';
import ColumnChart from './ColumnChart.vue';

export default {
  name: 'BaseModal',
  components: {
    DialogDrag,
    ColumnChart
  }
};
</script>
<style src="vue-dialog-drag/dist/vue-dialog-drag.css"></style>

<!-- optional dialog styles, see example -->
<style src="vue-dialog-drag/dist/dialog-styles.css"></style>
<style scoped>
.dialog-drag {
  -webkit-box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border: 2px solid #1aad8d;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  width: 700px;
  z-index: 101;
}

.dialog-drag .dialog-header {
  background-color: #1aad8d;
  color: #fff;
  font-size: 0.9em;
  padding: 0.25em 3em 0.25em 1em;
  position: relative;
  text-align: left;
  width: auto;
}

.dialog-drag .dialog-header .buttons {
  margin: 0.25em 0.25em 0 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 105;
}

.dialog-drag .dialog-header button.close,
.dialog-drag .dialog-header button.pin {
  -webkit-box-shadow: none;
  background: transparent;
  border: none;
  box-shadow: none;
  color: #fff;
}

.dialog-drag .dialog-header button.close:hover,
.dialog-drag .dialog-header button.pin:hover {
  color: #e3a826;
}

.dialog-drag .dialog-header button.close:after {
  content: "\2716";
}

.dialog-drag .dialog-header button.pin:after {
  content: "\1F513";
}

.dialog-drag .dialog-body {
  padding: 1em;
}

.dialog-drag.fixed {
  -moz-user-select: auto;
  -ms-user-select: auto;
  -webkit-user-select: auto;
  border-color: #e3a826;
  user-select: auto;
}

.dialog-drag.fixed button.pin {
  font-weight: 700;
}

.dialog-drag.fixed button.pin:after {
  content: "\1F512";
}

.dialog-drag {
  min-width: 10em;
  background-color: #e6eee9;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
}

.dialog-1.dialog-drag {
  border: #1aad8d dashed 2px;
  background-color: #fff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.dialog-1.dialog-drag .dialog-header {
  background-color: transparent;
}

.dialog-1.dialog-drag .dialog-header .buttons button {
  color: #1aad8d;
}

.dialog-1.dialog-drag .dialog-header .title {
  display: none;
}

.dialog-drag.dialog-1.fixed {
  border: #1aad8d solid 2px;
}

.dialog-2.dialog-drag {
  border-color: #1aad8d;
}

.dialog-2.dialog-drag .dialog-header {
  background-color: #1aad8d;
  color: #fff;
}

.dialog-2.dialog-drag .dialog-header .buttons button {
  color: #fff;
}

.dialog-3.dialog-drag {
  border: none;
  background-color: #fdfaf1;
}

.dialog-3.dialog-drag .dialog-header {
  background-color: #e3a826;
  color: #fff;
}

.dialog-3.dialog-drag .dialog-header .buttons button {
  color: #f9edd2;
  text-shadow: none;
}

.dialog-3.dialog-drag .dialog-header .buttons button:hover {
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
}

.dialog-drag.dialog-3.fixed {
  margin: 2em;
  outline: #1aad8d 2px dashed;
  outline-offset: 0.25em;
}
</style>
