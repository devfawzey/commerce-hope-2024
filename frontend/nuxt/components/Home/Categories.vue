import { Categories } from "~/constants";
<script setup lang="ts">
import { Categories } from "~/constants";
</script>

<template>
  <section id="categories" class="text-center">
    <BaseSectionHeader title="categories" />
    <BaseWrapper
      class="categories-group grid max-w-3xl place-items-center mx-auto grid-cols-2 sm:grid-cols-4 gap-6 px-12">
      <HomeCategoryCard
        v-for="categoryItem in Categories"
        :category="categoryItem"
      />
    </BaseWrapper>
  </section>
</template>
