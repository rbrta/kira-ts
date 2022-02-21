<template>
	<button class="bg-white p-1 rounded border-white">
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
