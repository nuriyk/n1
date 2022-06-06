<template>
  <div>
    <div
      class="
        grid
        lg:grid-cols-3
        lg:grid-cols-1
        subscribe
        flex
        items-center
        gap-32
        mt-100
        mb-100
        py-30
        px-30

      "
    >
      <div class="lg:col-span-1">
        <h2 class="subscribe-title">
          Subscribe to receive the
          <br />
          latest updates
        </h2>
        <div class="flex lg:items-center xss:flex-col mt-30">
          <input
            placeholder="Enter your Email"
            class="subscribe-input lg:w-420px px-10"
            type="email"
          />
          <button class="subscribe-button xss:mt-20 lg:ml-20">Subscribe</button>
        </div>
      </div>
      <div class="col-span-1"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>