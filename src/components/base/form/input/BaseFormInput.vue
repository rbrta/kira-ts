<template>
	<input
		:type="type"
		class="base-m p-[1.75rem] border border-gray-300 focus:border-purple-400 outline-none"
		@input="onInputHandler"
		:class="{ 'invalid-input': !isValid }"
	/>
</template>

<script lang="ts">
import useValidation from "@/composables/useValidation";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
	props: {
		isServerValid: Boolean,
		value: String,
		type: {
			type: String,
			default: "text",
			validator: (value: string) => {
				return ["text", "number", "email", "password"].includes(value);
			},
		},
	},
	setup(props) {
		const isValidClient = ref(true)
		const validator = useValidation(props.type)

		const onInputHandler = function (e: Event): void {
			const element = e.currentTarget as HTMLInputElement;
			const value = element.value;
			isValidClient.value = validator(value)
		}

		const isValid = computed<boolean>(() => {
			return props.isServerValid && isValidClient.value
		})

		return {
			onInputHandler, isValid
		};
	},
});
</script>
