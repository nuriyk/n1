<template>
  <div>
    <Header />

    <GamingHeadSet />

    <section class="pt-80 section-bg">
      <div class="pb-100 mb-100">
        <div class="md:container xss:px-20">
          <Subscribe />
          <Team />
        </div>
      </div>
      <Footer  />
    </section>
  </div>
</template>

<script>
import { metaConfig } from "~/core/meta.config";
import { getCanonicalUrl } from "~/core/helper-functions";

export default {
  name: "Home",

  head() {
    return {
      meta: [
        { hid: "og:title", name: "og:title", content: metaConfig.title },
        {
          hid: "og:description",
          name: "og:description",
          content: metaConfig.description,
        },
        {
          hid: "og:url",
          name: "og:url",
          content: getCanonicalUrl(this.$route),
        },
      ],

      link: [{ rel: "canonical", href: getCanonicalUrl(this.$route) }],
    };
  },
};
</script>




<style scoped>
.section-bg {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      #000000 10.08%,
      #000000 77.08%,
      rgba(0, 0, 0, 0) 100%
    ),
    #000000;
}
</style>
