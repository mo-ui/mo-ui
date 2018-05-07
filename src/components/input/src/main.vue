<template>
    <div :class="classes" @mouseenter="hovering = true" @mouseleave="hovering = false">
        <template v-if="type != 'textarea'">
            <input
                v-if="type !== 'textarea'"
                class="mo-input--inner"
                :type="type"
                :disabled="disabled"
                :autocomplete="autoComplete"
                :value="currentValue"
                :placeholder="placeholder"
                ref="input"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                @change="handleChange">
        </template>
        <textarea
            v-else
            :disabled="disabled"
            :value="currentValue"
            ref="textarea"
            v-bind="$attrs"
            @input="handleInput"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
        ></textarea>
    </div>
</template>

<script>
const PrefixOfClass = 'mo-input';
export default {
    name: 'MoInput',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        disabled: Boolean,
        type: {
            type: String,
            default: 'text'
        },
        autoComplete: {
            type: String,
            default: 'off'
        }
    },
    data() {
        return {
            currentValue: this.value,
            focused: false,
            hovering: false
        }
    },
    computed: {
        classes() {
            return [
                this.type === 'textarea' ? 'el-textarea' : `${PrefixOfClass}`
            ]
        }
    },
    methods: {
        focus() {
            (this.$refs.input || this.$refs.textarea).focus();
        },
        blur() {
            (this.$refs.input || this.$refs.textarea).blur();
        },
        handleInput(event) {
            const value = event.target.value;
            this.$emit('input', value);
        },
        handleChange(event) {
            this.$emit('change', event.target.value);
        },
        handleFocus(event) {
            this.focused = true;
            this.$emit('focus', event);
        },
        handleBlur(event) {
            this.focused = false;
            this.$emit('blur', event);
        },
        setCurrentValue(value) {
            if (value === this.currentValue) return;
            this.currentValue = value;
        }
    },
    watch: {
        'value'(val, oldValue) {
            this.setCurrentValue(val)
        }
    }
}
</script>

<style>
@import '../../../style/index.css';
</style>
