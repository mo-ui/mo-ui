<template>
    <transition name="mo-fade-in-linear">
        <div
            :class="classes"
             v-show="visible"
             >
            <div class="mo-alert--content">
                <span class="mo-alert--title" v-if="title"> {{ title }}</span>
                <i class="mo-alert--closebtn" @click="close()"> X </i>
            </div>
        </div>
    </transition>
</template>

<script>

    const PrefixOfClass = 'mo-alert';

    export default {
        name: "MoAlert",
        props: {
            title: {
                type: String,
                default: '',
                required: true
            },
            type: {
                default: 'default',
                validator (value) {
                    return (['info', 'success', 'warning', 'danger'].indexOf(value) >= 0)
                }
            }
        },
        data() {
            return {
                visible: true
            };
        },
        methods: {
            close() {
                this.visible = false;
                this.$emit('close');
            }
        },
        computed: {
            classes() {
                return [
                    `${PrefixOfClass}--${this.type}`
                ]
            }
        }
    }
</script>

<style scoped>

</style>
