<template>
  <h1>Tags</h1>
  <ul id="default-layout">
    <li
      v-for="(tag, index) in this.$frontmatterKey.list"
    >
      <router-link
        class="page-link"
        :to="tag.path"
      :name="tag.name"
      >
        {{ tag.name }} ({{ tag.posts.length}})
      </router-link>
    </li>
  </ul>
</template>
