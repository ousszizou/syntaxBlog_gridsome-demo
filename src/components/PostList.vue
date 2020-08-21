<template>
  <div class="post-list">
    <hr class="my-6" />
    <p v-html="post.date" />
    <h1 v-html="post.title" class="text-xl font-bold my-2" />
    <p v-html="post.description" />
    <g-link :to="post.path" class="font-bold text-green-500 mt-4 block">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>
