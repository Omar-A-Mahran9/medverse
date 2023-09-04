<template>
  <headercomp />
  <sectionone />
  <sectiontwo />
  <sectionthree />
  <sectionfour />
  <sectionfive />
  <sectionsix />
  <footercomp />
</template>
<script>
import headercomp from "@/components/Layout/HeaderView.vue";
import sectionone from "@/components/Home/SectionOne.vue";
import sectiontwo from "@/components/Home/SectionTwo.vue";
import sectionthree from "@/components/Home/SectionThree.vue";
import sectionfour from "@/components/Home/SectionFour.vue";
import sectionfive from "@/components/Home/SectionFive.vue";
import sectionsix from "@/components/Home/SectionSix.vue";

import footercomp from "@/components/Layout/FooterView.vue";
export default {
  components: {
    headercomp,
    sectionone,
    sectiontwo,
    sectionthree,
    sectionfour,
    sectionfive,
    sectionsix,
    footercomp,
  },
};
</script>
<style></style>
