<template>
  <div class="flex flex-wrap items-stretch mt-150 justify-between">
    <div class="w-30 md:w-25 sm:w-20 flex">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="sm:w-auto flex-1 text-center bg-purple-500 hover:bg-purple-600 text-white text-lg md:text-base sm:text-sm font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
      >
        Previous
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="w-30 flex">
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="sm:w-auto flex-1 text-center bg-purple-500 hover:bg-purple-600 text-white text-lg md:text-base sm:text-sm font-semibold py-3 px-6 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
      >
        Next
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
