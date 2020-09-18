<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'App',
    destroy: function () {
      this.$destroy();
      if (document.body.contains(this.$el)) {
        document.body.removeChild(this.$el);
      }
    }
  }
</script>
