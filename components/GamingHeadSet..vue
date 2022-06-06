<template>
  <section class="lg:pt-100 gaming-head-set">
    <div class="md:container xss:px-20 pb-100">
      <!-- TITLE -->
      <nav class="relative text-center">
        <div class="line-wrapper mx-auto">
          <img src="~/static/images/global/line.svg" alt="Line" />
        </div>
        <div class="absolute text-wrapped">
          <h5 class="text-white m-0">GAMING HEADSET</h5>
          <h2 class="text-white m-0">VORTEX BCI</h2>
        </div>
      </nav>
      <!-- TITLE END -->

      <div
        class="
          flex
          items-center
          pt-100
          xss:justify-center
          lg:justify-around
          grid
          lg:grid-cols-5
        "
      >
        <div class="lg:col-span-2 xss:mx-auto">
          <img
            src="~/static/images/home/cortex-bci/headphone-clean.png"
            class="w-full"
            alt="HeadPhone"
          />
        </div>

        <div class="lg:col-span-3 xss:mt-50">
          <div class="grid xss:space-y-50 xss:grid-cols-1 lg:grid-cols-2">
            <div class="flex flex-col items-center">
              <img
                class="w-100"
                src="~/static/images/home/cortex-bci/sensors.svg"
              />
              <div>
                <h5>Sensors</h5>
                <p class="cortext-bci-text text-center">
                  Dry soft polymer comb-type electodes
                </p>
                <p class="cortext-bci-text">10-20 placement system</p>
                <p class="cortext-bci-text">2 calibration electrodes</p>
                <p class="cortext-bci-text">8-16 electrodes</p>
              </div>
            </div>

            <div class="flex flex-col items-center">
              <img
                class="w-100"
                src="~/static/images/home/cortex-bci/acquisition.svg"
              />
              <div>
                <h5>Acquisition</h5>
                <p class="cortext-bci-text">Extensive noise reduction</p>
                <p class="cortext-bci-text">Up to 16 channels</p>
                <p class="cortext-bci-text">Crypto Amplifier</p>
              </div>
            </div>
          </div>

          <div class="flex flex-col items-center mt-100">
            <img
              class="w-100"
              src="~/static/images/home/cortex-bci/connectivity.svg"
            />
            <div>
              <h5>Connectivity</h5>
              <p class="cortext-bci-text">Integrated machine learning tools</p>
              <p class="cortext-bci-text">Computer & Smartphone</p>
              <p class="cortext-bci-text">Single I/O</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-wrapper lg:pt-100 lg:mt-100">
      <div class="md:container xss:px-20">
        <div class="grid lg:grid-cols-5 gap-32">
          <div class="lg:col-span-2 grid lg:grid-cols-2 gap-32">
            <div class="col-span-1">
              <div class="relative">
                <img
                  class="w-full border-image p-10"
                  src="~/static/images/home/cortex-play/headphone-secondary.png"
                />
              </div>
            </div>

            <div class="lg:col-span-1">
              <div class="lg:mt-70 lg:pt-100">
                <img
                  class="w-full border-image p-10"
                  src="~/static/images/home/cortex-play/vr.png"
                />
              </div>
            </div>
          </div>
          <div class="lg:col-span-3">
            <div class="lg:px-100">
              <h2 class="cortex-title uppercase mb-10 mt-30">
                Cortex <span class="cortex-title-play normal-case">Play</span>
              </h2>
              <p class="cortex-play-subtitle mb-10">
                Reinvent your gaming experience !
              </p>
              <p class="cortex-play-content">
                The Brain to Computer EEG (BCI EEG) headset is a low-cost,
                user-friendly electroencephalography system that allows a user
                to directly connect their brain activity to a computer.
                <br />
                <br />
                Imagine if you could play or control your avatar in your game
                only with your brain? This is now possible thanks to our
                expertly designed headset that reads users' brain activity with
                a with a high level of precision.
                <br />
                <br />
                Highly accurate, confortable and accessible, our headset will
                ensure you an optimal gaming experience
              </p>

              <div class="pt-40 flex">
                <button class="primary-btn">More Infos</button>
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
          </div>
        </div>

        <!-- BANNER -->
        <div
          class="
            grid
            lg:grid-cols-3
            banner
            flex
            items-center
            gap-32
            mt-100
            py-50
          "
        >
          <div class="col-span-1 xss:px-40 lg:px-90 flex flex-col items-center">
            <img
              class="w-70"
              src="~/static/images/home/banner/technology.svg"
              alt="Play"
            />
            <h3 class="banner-title mt-20">EEG Technology</h3>
            <p class="mt-20 banner-content">
              Non-invasive electroencephalography system and a very reliable and
              fine reading of the users brain for an
              <span class="content-strong">immersive gaming experience.</span>
            </p>
          </div>
          <div class="col-span-1 xss:px-40 lg:px-90 flex flex-col items-center">
            <img
              class="w-45"
              src="~/static/images/home/banner/comfort-design.svg"
              alt="Play"
            />
            <h3 class="banner-title mt-20">EEG Technology</h3>
            <p class="mt-20 banner-content">
              Non-invasive electroencephalography system and a very reliable and
              fine reading of the users brain for an
              <span class="content-strong">immersive gaming experience.</span>
            </p>
          </div>
          <div class="col-span-1 flex xss:px-40 lg:px-90 flex-col items-center">
            <img
              class="w-100"
              src="~/static/images/home/banner/accessible.svg"
              alt="Play"
            />
            <h3 class="banner-title mt-20">EEG Technology</h3>
            <p class="mt-20 banner-content">
              Non-invasive electroencephalography system and a very reliable and
              fine reading of the users brain for an
              <span class="content-strong">immersive gaming experience.</span>
            </p>
          </div>
        </div>

        <!-- context develop -->
        <div
          class="
            cortext-develop
            grid
            lg:grid-cols-5
            flex
            items-center
            mt-100
            py-50
          "
        >
          <div class="col-span-2">
            <div>
              <h2 class="cortex-title uppercase mb-10">
                CORTEX
                <span class="cortex-title-play normal-case">Develop</span>
              </h2>
              <p class="cortex-play-subtitle mb-10">
                Integrate BCI technology in your application!
              </p>
              <p class="cortex-play-content">
                The Brain to Computer EEG (BCI EEG) headset is a low-cost,
                user-friendly electroencephalography system that allows a user
                to directly connect their brain activity to a computer.

                <br />
                <br />
                Imagine if you could play or control your avatar in your game
                only with your brain? This is now possible thanks to our
                expertly designed headset that reads users' brain activity with
                a with a high level of precision.
                <br />
                <br />
                Highly accurate, confortable and accessible, our headset will
                ensure you an optimal gaming experience
              </p>

              <div class="pt-40 flex">
                <button class="primary-btn">More Infos</button>
                <button class="apply-button ml-30">Apply</button>
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <img
              src="~/static/images/home/cortex-develop/brain.png"
              alt="Brain"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="partners pt-50">
      <div class="md:container xss:px-20">
        <nav class="relative text-center">
          <div class="line-wrapper mx-auto">
            <img src="~/static/images/global/line.svg" alt="Line" />
          </div>
          <div class="absolute text-wrapped">
            <h5 class="text-white text-gaming-headset m-0">PARTNERS</h5>
            <h2 class="text-white text-vortec-bci m-0">WORKING WITH</h2>
          </div>
        </nav>

        <div
          class="
            pt-100
            pb-100
            mb-100
            mt-50
            flex flex-wrap
            justify-center
            items-center
          "
        >
          <div class="head-wrap">
            <img src="~/static/images/home/partners/head.png" alt="Play" />
          </div>
          <div class="head-wrap lg:mx-100 xss:mx-10">
            <img src="~/static/images/home/partners/head.png" alt="Play" />
          </div>
          <div class="head-wrap">
            <img src="~/static/images/home/partners/head.png" alt="Play" />
          </div>
        </div>

        <nav class="relative text-center">
          <div class="line-wrapper mx-auto">
            <img src="~/static/images/global/line.svg" alt="Line" />
          </div>
          <div class="absolute text-wrapped">
            <h5 class="text-white text-gaming-headset m-0">SUBTITLE</h5>
            <h2 class="text-white text-vortec-bci m-0">ROADMAP</h2>
          </div>
        </nav>

        <div class="grid grid-cols-2 mt-100 pt-100">
          <div class="lg:col-span-1"></div>
          <div class="lg:col-span-1 xss:col-span-2">
            <div class="flex items-start relative">
              <div class="line-roadmap">
                <img src="~/static/images/global/roadmap.svg" alt="Line" />
              </div>
              <img
                class="w-30 square"
                src="~/static/images/home/roadmap/square.svg"
                alt="Play"
              />
              <p class="roadmap-text ml-60">
                <span class="content-strong font-bold"> MVP Development</span>
                with integration of the Software BCI
                <br />
                data reader,
                <br />
                Software for emotions & movement prediction
                <br />
                Base of the app store on desktop app
                <br />
                Autocalibration on individual users
                <br />
                Deep learning models
                <br />
                EEG Gaming Headset with or without speakers
                <br />
                Cortex community developement
                <br />
                Partnership with EY gaming studios
                <br />
                Websocket server & rest API for developers
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-2 mt-100">
          <div class="lg:col-span-1 xss:col-span-2 relative">
            <div>
              <img
                class="
                  xss:hidden
                  lg:block
                  w-30
                  square-footer
                  absolute
                  lg:right-17mpx
                "
                src="~/static/images/home/roadmap/square.svg"
                alt="Play"
              />
              <img
                class="
                  lg:hidden
                  xss:block
                  w-30
                  square-middle
                  absolute
                  xss:left-13mpx
                "
                src="~/static/images/home/roadmap/square.svg"
                alt="Play"
              />
            </div>

            <p class="roadmap-text lg:text-right lg:mr-60 ml-60">
              <span class="content-strong font-bold"> Expansion</span>
              with the development of Brainfix
              <br />
              Cerebellum- free BCI software Development Kit aimed
              <br />
              at independent content developers
              <br />
              Increased partnerships in the gaming & tech sectors
              <br />
              Continued community development and headset
              <br />
              improvements
            </p>
          </div>
          <div class="lg:col-span-1"></div>
        </div>

        <div class="grid grid-cols-2 mt-100">
          <div class="lg:col-span-1"></div>
          <div class="lg:col-span-1 xss:col-span-2">
            <div class="flex items-start relative">
              <img
                class="w-30 square-footer absolute left-13mpx"
                src="~/static/images/home/roadmap/square.svg"
                alt="Play"
              />
              <p class="roadmap-text ml-60">
                <span class="content-strong font-bold"> Healthcare & IOTA</span>
                with the development of healthcare
                <br />
                application.
                <br />
                Home neurofeedback & neuro-improvement applications
                <br />
                Medical certification for the headset
              </p>
            </div>
          </div>
        </div>

        <div class="grid-cols-1 mt-100 pt-30 pb-100">
          <div class="flex flex-col items-center justify-center">
            <img
              class="w-60"
              src="~/static/images/home/roadmap/domotic-application.svg"
              alt="domotic-application"
            />
            <h2 class="domotic-application mt-10">
              DOMOTIC
              <br />
              APPLICATION
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
</style>