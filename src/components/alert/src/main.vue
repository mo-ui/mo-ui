<template>
    <transition name="mo-alert-fade">
        <div
            class="mo-alert"
            :class="[typeClass, center ? 'is-center' : '']"
             v-show="visible"
             role="alert"
             >

        </div>
    </transition>
</template>

<script>
    export default {
        name: "main"
    }
</script>

<style scoped>

</style>
