<template>
  <div class="flex flex-col flex-grow">
    <div class="flex justify-center">
      <img
        class="h-64 object-fill p-2"
        :src="item.thumbnail"
        :alt="item.title"
      />
    </div>
    <div class="flex flex-col h-56 relative p-6 justify-between">
      <div class="flex flex-col">
        <h3 class="mt-2 h-12 text-xl leading-7 font-semibold text-gray-900">
          {{ item.title }}
        </h3>
        <p class="mt-6 h-auto text-base line-clamp-3 leading-6 text-gray-500">
          {{ item.teaser }}
        </p>
      </div>
      <div
        v-if="item.date"
        class="flex h-6 absolute bottom-2 mt-5 items-center"
      >
        <div class="">
          <div class="flex text-sm leading-5 text-gray-500">
            {{ formatDate(item.date) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
