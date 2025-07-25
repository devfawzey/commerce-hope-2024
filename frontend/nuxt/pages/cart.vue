<script setup lang='ts'>

const store = useCartStore()

const cartLength = computed(() => store.getCartLength);
const colorMode = useColorMode()

definePageMeta({
  middleware: ['have-to-auth']
})

</script>

<template>
  <main id='cart-page'>
    <BaseWrapper class='mt-8'>
      <BasePageHeader />

      <div class="grid grid-cols-7 gap-4 lg:gap-5">
        <!-- shopping-cart -->
        <div class="col-span-full md:col-span-5">
          <div class="bg-white dark:bg-app t-ring p-4 lg:p-6">
            <div>
              <span class="text-xl sm:text-2xl font-bold">Shopping Cart:</span>
              &nbsp;
              <span v-text="`(${cartLength} item)`" />
            </div>
            <!-- shopping-cart__items -->
            <div class="cart__items max-h-[400px] overflow-y-auto p-2  overflow-x-auto my-3" v-if="cartLength > 0"
              main-scroll-horizental main-scroll>
              <!-- TEMPLATE -->
              <div class="product__controller--template min-w-[550px]">
                <div
                  class="product-controller__wrapper--template text-center grid grid-cols-8 font-semibold [&>div]:bg-gray-5 gap-2 items-center">
                  <!-- info -->
                  <div class="product__info col-span-3 xl:col-span-4 text-left" v-text="'Product'" />
                  <!-- quantity -->
                  <div class="quantity col-span-2" v-text="'Quantity'" />
                  <!-- total__price -->
                  <div class="total__price col-span-2 xl:col-span-1" v-text="'Total Price'" />
                  <!-- action(delete_btn) -->
                  <div class="action col-span-1" v-text="'Action'" />
                </div>
              </div>

              <template v-for="(product, index) in store.cart">
                <CartProductController :cart-item="product" />
                <UDivider v-if="index !== store.getCartLength - 1" />
              </template>
            </div>
            <!-- empty_cart -->
            <div v-else>
              <ColorScheme tag="div" class="w-60  aspect-square mx-auto t-skeleton rounded-full">
                <NuxtImg :src="`/products/empty-cart-${colorMode.value}.webp`"
                  class="max-w-xs w-52  aspect-auto max-h-60 mt-8 mx-auto" quality="60" alt="empty-cart" format="webp"
                  placeholder-class="w-52 mx-auto max-w-60 min-h-40 py-16 aspect-square max-h-52  max-w-full"
                  placeholder="/svg/spinner.svg" loading="lazy" />
              </ColorScheme>
              <UDivider class="my-6" />
              <UButton icon="i-heroicons-arrow-left" label="Contiue Shopping" size="xl" color="gray" variant="ghost"
                to="/products" />
            </div>
          </div>
        </div>
        <!-- checkout -->
        <div class="col-span-full md:col-span-2 t-cards-gap-y">
          <CheckoutPaymentSummary />
          <UButton block :disabled="store.isCartEmpty" @click="navigateTo('/checkout')"
            class="dark:text-white disabled-btn" color="primary" size="lg" label="Checkout"
            :ui="{ rounded: 'rounded-lg' }" />
        </div>
      </div>
    </BaseWrapper>
  </main>
</template>