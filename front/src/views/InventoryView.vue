<template>
  <InventoryHeader />
  <InventoryHome />
  <InventoryFooter />
</template>
<script>
import InventoryHeader from "@/components/Layout/InventoryHeader.view.vue";
import InventoryFooter from "@/components/Layout/InventoryFooter.view.vue";
import InventoryHome from "@/components/Inventory/InventoryIndex.vue";

export default {
  components: {
    InventoryHeader,
    InventoryFooter,
    InventoryHome,
  },
};
</script>
