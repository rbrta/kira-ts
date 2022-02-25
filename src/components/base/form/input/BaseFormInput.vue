<template>
	<input
		:type="type"
		:name="name"
		:class="`base-m p-1 border rounded-sm ${isValid ? 'border-grey focus-visible:border-blue focus-visible:outline-blue' : 'border-pink focus-visible:border-red focus-visible:outline-red'}`"
		@input="onInputHandler"
	/>
</template>

<script lang="ts">
import useValidation from "@/composables/useValidation";
import { computed, defineComponent, ref, toRef } from "vue";

export default defineComponent({
	props: {
		isValidOnServer: Boolean,
		value: String,
		name: String,
		type: {
			type: String,
			default: "text",
			validator: (value: string) => {
				return ["text", "number", "email", "password"].includes(value);
			},
		},
	},
	setup(props) {
		const isValidOnClient = ref(true)
		const isValidOnServer = toRef(props, "isValidOnServer")
		const validator = useValidation(props.type)

		const onInputHandler = function (e: Event): void {
			const element = e.currentTarget as HTMLInputElement;
			const value = element.value;
			isValidOnServer.value = true
			isValidOnClient.value = validator(value)
		}

		const isValid = computed<boolean>(() => {
			return isValidOnServer.value && isValidOnClient.value
		})

		return {
			onInputHandler,
			isValidOnServer,
			isValidOnClient,
			isValid
		};
	},
});
</script>
