<template lang="pug">
div
  b-alert.d-block(variant='warning' show)
    span Oops

  .float-right
    nuxt-link(to='/') Retourner à l'accueil

</template>

<script>
export default {
  layout: 'white'
}
</script>
