
<template>
    <select class="form-control">
        <slot></slot>
    </select>
</template>
<script>

import select2 from 'select2'
import 'select2/dist/css/select2.css';

export default Vue.component('select2', {
  props: ['options', 'value', 'mapTo', 'valueId'],
  mounted: function () {
    var vm = this
    $(this.$el)
      .val(this.value)
      .select2({ data: this.options })
      .on('change', function () {
        vm.$emit('input', this.value )
      })
  },
  watch: {
    value: function (value) {
      $(this.$el).val(value)
    },
    options: function (options) {
      $(this.$el).select2({ data: options })
    }
  },
  destroyed: function () {
    $(this.$el).off().select2('destroy')
  }
})
</script>