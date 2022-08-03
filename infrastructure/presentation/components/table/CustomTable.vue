<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({

});
</script>

<template>
    <table>
        <thead>
            <slot name="head"></slot>
        </thead>
        <tbody>
            <slot name="body"></slot>
        </tbody>
    </table>
</template>

<style lang="scss" scoped></style>