<template>
  <section
    id="header"
    class="sticky top-0 bg-white text-gray-600 body-font border-b border-gray-300"
  >
    <div
      class="container mx-auto flex p-5 flex-col md:flex-row flex-nowrap items-center"
    >
      <div class="flex lg:w-2/5">
        <a
          class="flex flex-row title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            class="h-12 object-cover object-center rounded"
            alt="icon"
            src="../static/img/diw-icon.svg"
          />

          <span class="ml-3 text-xl">Distributed Innovation Work</span>
        </a>
      </div>
      <div class="flex lg:w-1/5 lg:justify-center">
        <AppSearchInput />
      </div>
      <div class="flex lg:w-2/5 justify-end">
        <nav class="md:ml-auto md:mr-auto flex justify-center text-base">
          <a
            href="https://problem2value.com"
            class="mr-5 inline-flex hover:text-indigo-500"
            >Innovation</a
          >
          <a
            href="https://it-hires.eu"
            class="mr-5 inline-flex hover:text-indigo-500"
            >IT Staffing</a
          >
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
