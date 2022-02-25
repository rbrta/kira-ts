<template>
	<label class="relative group">
		<base-form-input
			:type="type"
			v-model="modelValue"
			:is-valid-on-server="isValidOnServer"
			v-bind="$attrs"
			class="w-full h-full"
		/>
		<h6
			:class="`base-m absolute left-1 top-1 bottom-1 border border-white group-focus-visible:top-0`"
		>{{ title }}</h6>
	</label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseFormInput from '../input/BaseFormInput.vue'

export default defineComponent({
	props: {
		title: String,
		type: String,
		modelValue: String,
		isValidOnServer: Boolean,
	},
	setup() {
		return {};
	},
	components: { BaseFormInput }
})
</script>

<style scoped>
</style>
