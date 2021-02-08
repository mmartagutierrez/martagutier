<template>
  <div>
    <span class="language">Español</span>
    <label class="switch">
      <input
        type="checkbox"
        :checked="currentLanguage === 'english'"
        @click="clickHandler"
      />
      <span class="back-of-toggle"></span>
    </label>
    <span class="language">English</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "vue-simple-switch",
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  methods: {
    clickHandler() {
      const languageToSwitchTo =
        this.currentLanguage === "english" ? "spanish" : "english";
      this.$store.dispatch("SET_LANGUAGE", languageToSwitchTo);
    },
  },
};
</script>

<style scoped>
/* This component + its style is adapted from https://raw.githubusercontent.com/OperKH/vue-simple-switch/master/src/components/vueSimpleSwitch.vue */

.language {
  font-size: 12px;
  margin-right: 5px;
  text-transform: lowercase;
  font-style: italic;
}
.language:last-child {
  margin-left: 5px;
  margin-right: 0px;
}

.switch {
  cursor: pointer;
  user-select: none;
}
.switch input {
  display: none;
}
.switch span {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: lightblue;
  border: 1px solid lightsteelblue;
  border-radius: 100px;
  transition: left 0.5s, background-color 0.5s, border-color 0.5s;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1) inset;
  vertical-align: middle;
}
.switch span::after {
  content: "";
  position: absolute;
  background-color: #fff;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  border: 1px solid #ddd;
  border-radius: 400px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.switch input:checked + span {
  background-color: #5d9cec;
  border-color: #5d9cec;
  transition: left 0.5s, background-color 0.5s, border-color 0.5s;
}
.switch input:checked + span::after {
  left: 50%;
  transition: left 0.2s, background-color 0.2s, border-color 0.2s;
}
.switch input:disabled + span {
  background-color: #f1f1f1;
  cursor: not-allowed;
}
</style>
