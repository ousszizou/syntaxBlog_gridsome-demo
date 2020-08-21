<template>
  <Layout>
    <section>
      <PostList v-for="edge in $page.allPost.edges" :key="edge.node.id" :post="edge.node" />
    </section>
  </Layout>
</template>

<page-query>
query {
  allPost {
    totalCount
    edges {
      node {
        id
        title
        description
        date (format: "D MMMM YYYY")
        path
      }
    }
  }
}
</page-query>

<script>

import PostList from "~/components/PostList.vue"

export default {
  metaInfo: {
    title: 'index page'
  },
  components: {
    PostList
  },
}
</script>
