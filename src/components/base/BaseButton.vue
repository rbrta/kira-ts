<template>
	<button class="base-btn">
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
