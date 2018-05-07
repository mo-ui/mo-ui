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
        type: {
            default: 'default',
            validator (value) {
                return (['default', 'info', 'primary', 'success', 'warning', 'danger'].indexOf(value) >= 0)
            }
        },
        size: {
            default: 'md',
            validator (value) {
                return (['lg', 'md', 'sm'].indexOf(value) >= 0)
            }
        }
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
                `${PrefixOfClass}--${this.type}`,
                `${PrefixOfClass}--${this.size}`,
                this.disabled ? `${PrefixOfClass}--disabled` : ''
            ];
        }
    }
};
</script>

<style>
@import '../../../style/index.css';
</style>

