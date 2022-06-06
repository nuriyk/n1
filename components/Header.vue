<template>
  <div>
    <div class="header-linear"></div>

    <header id="home" class="pb-100 header-bg">
      <div class="md:container xss:px-20">
        <nav class="pt-40 flex flex-wrap justify-between items-center">
          <div class="logo-wrapped flex items-center justify-between">
            <img
              src="~/static/images/global/logo.png"
              alt="Logo"
              style="width: 100%"
            />
          </div>

          <!-- Menu -->
          <div class="menu hidden md:block xss:mt-20 sm:mt-0">
            <ul class="list-none">
              <li class="active md:text-18px"><a href="#home">HOME</a></li>
              <li class="mx-20 md:text-18px">
                <a href="#company">COMPANY</a>
              </li>
              <li class="mr-20 md:text-18px">
                <a href="#features">FEATURES</a>
              </li>
              <li>
                <button class="sign-up text-white xss:mt-20 xs:mt-0">Sign Up</button>
              </li>
            </ul>
          </div>
          <!-- HAMBURGER ICON -->
          <button
            @click="open = !open"
            :class="open ? 'open' : ''"
            class="block hamburger md:hidden"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
          <!-- MOBILE MENU -->

          <ul
            v-show="open"
            class="
              list-none
              menu-mobile
              absolute
              flex-col
              top-100
              left-20
              right-20
              items-center
              self-end
              drop-shadow-md
              sm:w-auto
              bg-white
              px-30 py-20
            "
          >
            <li class="active md:text-18px"><a class="py-10 block  text-bold" href="#home">HOME</a></li>
            <li class="md:text-18px">
              <a href="#company" class="py-10 block  text-bold">COMPANY</a>
            </li>
            <li class=" md:text-18px">
              <a href="#features" class="py-10 block  text-bold">FEATURES</a>
            </li>
            <li class="mt-6">
              <button class="sign-up block text-bold" >Sign Up</button>
            </li>
          </ul>
        </nav>

        <main
          class="xss:mt-100 flex flex-wrap items-center justify-center lg:grid lg:grid-cols-5"
        >
          <div class="lg:col-span-3">
            <h1 class="title xss:text-40px lg:text-60px">
              Hack your <span class="brain">Brain</span>
            </h1>
            <p class="subtitle lg:w-498px">
              We are a tech start-up developing Brain-Computer Interface (BCI)
              products based on Electro-encephalography (EEG) technology for
              mass-consumption applications in the Gaming, Healthcare and Data
              Analytics sectors.
            </p>

            <div class="pt-40 flex">
              <button class="primary-btn">Pitch Deck</button>
              <button class="play-video flex items-center">
                <img
                  class="play"
                  src="~/static/images/global/play.svg"
                  alt="Play"
                />
                Play Video
              </button>
            </div>
          </div>

          <div class="xss:pt-100 relative w-260px lg:col-span-2">
            <div class="bg-linear-right-side-header"></div>
            <img
              src="~/static/images/home/hero/hero-ill.svg"
              class="w-full block lg:mb-100 lg:pb-50"
              alt="Image"
            />
          </div>
        </main>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NuxtHeader",
  data() {
    return {
      open: false,
    };
  },
};
</script>