<template>
  <span v-show="translatedText" :class="`${opacityClass} text-container`">{{
    translatedText
  }}</span>
</template>

<script>
import { mapGetters } from "vuex";
import phrases from "@/assets/phrases.json";

export default {
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
  data() {
    return {
      translatedText: "",
      opacityClass: "opaque",
    };
  },
  methods: {
    setLanguage() {
      this.translatedText = phrases[this.$attrs.phrase][this.currentLanguage];
    },
  },
  created() {
    this.setLanguage();
  },
  watch: {
    currentLanguage() {
      this.opacityClass = "transparent";
      // Primitive ways to delay javascript execution like setTimeout are somewhat bad practice but its use is limited here so prob fine
      setTimeout(() => {
        this.setLanguage();
        this.opacityClass = "opaque";
      }, 200);
    },
  },
};
</script>
<style scoped>
.text-container {
  transition-duration: 0.1s;
}
.opaque {
  opacity: 1;
}
.transparent {
  opacity: 0;
}
</style>
