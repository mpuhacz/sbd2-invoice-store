
<template>
    <input type="text" class="datepicker form-control" required>
</template>
<script>

    import 'bootstrap-datepicker'
    import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css'

    export default Vue.component('datepicker', {
      props: ['options', 'value', 'mapTo', 'valueId'],
      mounted: function () {
        var vm = this
        $(this.$el)
            .val(this.value)
            .datepicker({ format: 'yyyy-mm-dd' })
            .on('change', function () {
                vm.$emit('input', this.value )
            })
      },
      watch: {
        value: function (value) {
          $(this.$el).val(value)
        },
      },
      destroyed: function () {
        $(this.$el).off().datepicker('destroy')
      }
    })
</script>