<script setup lang="ts">

import type { IProduct } from "~/types";
import { DISCOUNT } from "~/constants";

const { $viewport } = useNuxtApp();
const props = defineProps<{ product: IProduct }>();

const modal = ref(false)
const productPagePath = computed(() => `/products/${props.product.id}`);

const TProductColors = ["blue", "red", "yellow"];



</script>

<template>
  <!-- max-w-96/ -->
  <div v-if="true"
    class="product-card mx-auto h-full w-full max-w-80 overflow-hidden rounded-lg bg-white shadow-lg shadow-gray-200 t-ring transition-all hover:ring-blue-600 dark:bg-background dark:shadow-gray-900 dark:hover:ring-main">
    <div class="product-card__wrapper flex h-full w-full flex-col">
      <!-- img -->
      <NuxtLink :to="productPagePath" v-if="true" class="relative w-full aspect-square bg-white">
        <!-- img ratio is 1:1 -->
        <!-- <div class="product-card__img w-full h-full relative"> -->
        <NuxtImg
          class="product-card__img mix-blend-multiply dark:mix-blend-normal object-contain square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-auto max-h-full scale-75  p-5 md:p-4"
          :src="props.product.image" quality="60" :alt="props.product.title" format="webp" placeholder="/svg/spinner.svg"
          placeholder-class="w-1/2 py-16 max-h-full" loading="lazy" />
        <!-- placeholder-class=" !w-full !h-full max-w-full" -->
        <!-- </div> -->

      </NuxtLink>
      <!-- title -->
      <div class="product-card__body flex w-full max-w-full flex-grow flex-col justify-between px-2 py-3 sm:px-3"
        v-if="true">
        <NuxtLink :to="productPagePath">
          <div class="product-card__title three-dots max-w-full select-none font-medium" v-text="props.product.title"
            v-if="true" />
        </NuxtLink>
        <div class="flex-grow" />
        <!-- <div class="spinner"/> -->
        <!-- rating+colors -->
        <div class="product-card__rating-colors my-2 flex items-center justify-between" v-if="true">
          <div class="rating flex items-center gap-1 text-xs">
            <UIcon name="mdi-star-outline" />
            <span v-text="`(${props.product.rating.rate})`" />
          </div>
          <div class="product-card__colors flex items-center">
            <div v-for="color in TProductColors" class="-ms-0.5 aspect-square w-3 rounded-full t-tring"
              :style="{ backgroundColor: color }" />
            <span v-text="'+1'" class="ms-1 text-xs" />
          </div>
        </div>
        <!-- price+actions -->
        <div class="price-actions flex items-center justify-between" v-if="true">
          <div class="product-card__price space-x-1">
            <strong v-text="`$${props.product.price}`" class="text-xs sm:text-base" />
            <span v-text="`(-${DISCOUNT}%)`" class="text-xs text-orange-600" />
          </div>
          <div class="product-card__actions flex items-center sm:gap-1">
            <ProductsView v-model="modal" :product="props.product">
              <UButton icon="mdi-eye-outline" :size="$viewport.isLessThan('mobileWide') ? 'xs' : 'sm'" variant="ghost"
                color="gray" @click="modal = !modal"
                class="rounded-full p-1 text-black/70 hover:bg-black/10 dark:text-white/60 dark:hover:bg-white/10 sm:p-2"
                square />
            </ProductsView>
            <!-- TODO add later -->
            <UButton v-if="false" icon="line-md:heart" :size="$viewport.isLessThan('mobileWide') ? 'xs' : 'sm'"
              variant="ghost" color="gray"
              class="rounded-full text-black/70 hover:bg-black/10 dark:text-white/60 dark:hover:bg-white/10" square />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>{{ props.product.category }} || {{ props.product.price }}</div>
</template>
