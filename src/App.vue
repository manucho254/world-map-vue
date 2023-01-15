<template>
  <div><WorldMap :countries="{ US: 'US' , CA: 'CA'}" default-background-color="#000"/></div>
</template>

<script>
import WorldMap from "@/components/worldMapComponent.vue";
export default {
  name: "App",
  components: { WorldMap },
};
</script>
