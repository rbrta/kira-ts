<template>
	<input :type="type" class="base-m focus:border-purple-400" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		isServerValid: Boolean,
		value: String,
		type: {
			type: String,
			default: "text",
			validator: function (value: string): boolean {
				return ["text", "number", "email", "password"].includes(value);
			},
		},
	},
	setup() {
		return {};
	},
});
</script>

<style scoped lang="scss">
input {
	padding: 1.75rem;
	border: 0.25rem solid #aaaaaa;
	border-radius: 0.5rem;
	outline: none;
}
</style>
