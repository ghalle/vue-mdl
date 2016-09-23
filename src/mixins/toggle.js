export default {
  props: {
    checked: {
      required: false
    },
    disabled: {
      required: false
    },
    id: String,
    value: {
      required: false
    }
  },
  methods: {
    fireChange: function (event) {
      this.$emit('input', event.target.checked)
    }
  }
}
