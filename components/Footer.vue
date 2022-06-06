<template>
  <div>
    <div class="footer pt-80 pb-30">
      <div class="md:container xss:px-20">
        <div class="grid lg:grid-cols-3 xss:grid-cols-1">
          <div class="col-span-1 flex items-start xss:mb-30">
            <img
              src="~/static/images/favicon/mstile-150x150.png"
              alt="Logo"
              class="w-70"
            />
            <div>
              <h1 class="footer-logo-text">Cortex Machina</h1>
              <h6 class="footer-logo-content">Hack your Brain, Play your Game</h6>
              <button class="subscribe-button mt-20">Support Us</button>
            </div>
          </div>
          <div class="lg:col-span-2  xss:col-span-1  grid flex items-start lg:grid-cols-4">
            <div class="col-span-1">
              <ul>
                <li><h1>Company</h1></li>
                <li><a href="#">About Cortex</a></li>
                <li><a href="#">Confidentiality Policy</a></li>
              </ul>
            </div>

            <div class="col-span-1">
              <ul>
                <li><h1>Product</h1></li>
                <li><a href="#">Cortex Play</a></li>
                <li><a href="#">Corext Develop</a></li>
              </ul>
            </div>

            <div class="col-span-1">
              <ul>
                <li><h1>Support</h1></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>

            <div class="col-span-1">
              <ul>
                <li><h2>Follow us</h2></li>
                <li>
                  <div class="flex items-center">
                    <img
                      src="~/static/images/footer/facebook.svg"
                      alt="facebook"
                      class="w-14"
                    />

                    <img
                      src="~/static/images/footer/twitter.svg"
                      alt="twitter"
                      class="w-25 mx-10"
                    />
                    <img
                      src="~/static/images/footer/linkedin.svg"
                      alt="linkedin"
                      class="w-20"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-80">
          <p>@2022 CortexMachina all rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>