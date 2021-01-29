<template>
  <LayoutWrapper>
    <div class="main">
      <ul>
        <li
          v-for="(category, index) in $category.list"
          :key="category.path"
          class="category"
        >{{ category.name }} ({{ category.pages.length }})</li>
      </ul>
      <EgoistTags :tags="$categories.list"/>
    </div>
  </LayoutWrapper>
</template>
