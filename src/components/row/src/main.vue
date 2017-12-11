<template>
    <div class="mo-row" :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
const prefixCls = 'mo-row';

export default {
    name: 'MoRow',
    props: {
        alignType: {
            validator (value) {
                return (['top', 'middle', 'bottom'].indexOf(value) >= 0);
            }
        },
        justify: {
            validator (value) {
                return (['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) >= 0);
            }
        },
        gutter: {
            type: Number,
            default: 0
        }
    },
    computed: {
        classes () {
            return [
                {
                    [`is-align-${this.alignType}`]: !!this.alignType,
                    [`is-justify-${this.justify}`]: !!this.justify
                }
            ];
        },
        styles () {
            let style = {};
            if (this.gutter) {
                style.marginLeft = `-${this.gutter / 2}px`;
                style.marginRight = style.marginLeft;
            }
            return style;
        }
    }
};
</script>

<style>
@import '../../../style/index.css';
</style>
