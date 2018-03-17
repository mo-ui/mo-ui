<template>
  <button :disabled="disabled" @click="handleClick" :class="classes" :type="nativeType">
      <slot></slot>
  </button>
</template>

<script>

const PrefixOfClass = 'mo-button';

export default {
    name: 'MoButton',
    props: {
        disabled: Boolean,
        nativeType: {
            default: 'button',
            validator (value) {
                return (['button', 'submit', 'reset'].indexOf(value) >= 0);
            }
        },
        long: Boolean
    },
    methods: {
        handleClick (event) {
            this.$emit('click', event);
        }
    },
    computed: {
        classes () {
            return [
                `${PrefixOfClass}`,
                {
                    [`${PrefixOfClass}--long`]: this.long
                }
            ];
        }
    }
};
</script>

<style>
@import '../../../style/index.css';
</style>

