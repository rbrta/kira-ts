<template>
	<button class="bg-white-200 p-1 rounded border-white-100 shadow-neu focus:shadow-neu-inset">
		<slot></slot>
	</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style scoped></style>
