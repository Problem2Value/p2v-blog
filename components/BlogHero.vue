<template>
  <section
    id="hero"
    class="bg-purple-300 dark:bg-gray-800 text-gray-700 dark:text-white"
  >
    <div
      class="container mx-auto flex px-5 pt-20 pb-10 md:flex-row flex-col items-center"
    >
      <div
        class="lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <div>
          <h1 class="text-5xl mb-4 font-bold">From Problem to Value</h1>
          <p class="my-10 leading-relaxed text-2xl">
            Opinions and thoughts since 2017 on
            <span class="text-3xl text-purple-700 dark:text-purple-500"
              >Innovation</span
            >
            as well as distributed or
            <span class="text-3xl text-purple-700 dark:text-purple-500"
              >Remote Work</span
            >
          </p>
          <p class="text-base italic">
            No specific methodologies, frameworks & techniques and a clear focus
            on Europe
          </p>
        </div>

        <div class="flex w-full flex-col">
          <p class="flex justify-left px-auto mt-10 mb-3 text-xs">
            by the founders of:
          </p>
          <div class="flex justify-left px-auto">
            <button
              class="bg-white border-0 py-3 px-6 mx-2 focus:outline-none rounded"
            >
              <img
                class="bg-white h-7 w-auto object-cover"
                alt="hero"
                src="../static/img/Problem2Value-LogoLightBg.svg"
              />
            </button>
            <button
              class="bg-white border-0 py-3 px-6 mx-2 focus:outline-none rounded"
            >
              <img
                class="bg-white h-7 w-auto object-cover"
                alt="hero"
                src="../static/img/ITHires-LogoLightBg.svg"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="lg:w-1/2 md:w-1/2">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="../static/img/DistributedInnovationWork.svg"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
