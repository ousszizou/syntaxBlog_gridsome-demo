<template>
  <Layout>
    <br>
    <g-link to="/" class="font-bold text-red-500">  &larr; Go Back</g-link>
    <div>
      <h1 class="text-5xl my-4">{{$page.post.title}}</h1>
        <p class="font-bold italic underline mb-2">
          {{ $page.post.date}}
        </p>
    </div>
    <div class="leading-7 mt-10">
      <p v-html="$page.post.content" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
   post: post (path: $path) {
    id
    title
    content
    date (format: "D MMMM YYYY")
  }
}
</page-query>
