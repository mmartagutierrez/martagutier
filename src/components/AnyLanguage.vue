<template>
  <span v-show="translatedText">{{ translatedText }}</span>
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
    };
  },
  methods: {
    setLanguage() {
      this.translatedText =
        phrases[this.$attrs.keyPhrase][this.currentLanguage];
    },
  },
  created() {
    this.setLanguage();
  },
  watch: {
    currentLanguage() {
      this.setLanguage();
    },
  },
};
</script>
<style scoped></style>
