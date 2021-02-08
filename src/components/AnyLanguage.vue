<template>
  <div>{{ currentLanguage }}</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["currentLanguage"]),
  },
};
</script>
<style scoped></style>
