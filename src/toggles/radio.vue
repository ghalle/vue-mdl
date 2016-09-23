<template lang="jade">
label.mdl-radio.mdl-js-radio(v-bind:for.once='id' v-bind:class="{ 'is-disabled': disabled, 'is-checked': isChecked, 'is-upgraded': upgraded }")
  input.mdl-radio__button(v-bind:id.once='id' type='radio' v-bind:name.once='name' v-bind:checked='isChecked' v-on:change='fireChangedEvent' v-bind:disabled='disabled')
  span.mdl-radio__label
    slot
</template>

<script>
export default {
  data: function () {
    return {
      upgraded: false
    }
  },
  props: {
    id: String,
    name: String,
    value: {
      required: true
    },
    checkedValue: {
      required: true
    },
    disabled: Boolean
  },
  methods: {
    fireChangedEvent (event) {
      this.$emit('input', this.checkedValue)
    }
  },
  computed: {
    isChecked () {
      return this.value === this.checkedValue
    }
  },
  mounted () {
    componentHandler.upgradeElements(this.$el)
    this.upgraded = true
  }
}
</script>
