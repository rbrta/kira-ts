<template>
	<div>
		<div>
			<h2 class="base-xl my-1">Form</h2>
			<base-pre-section class="flex gap-2 items-center">
				<base-form-input type="email" />
				<h3 class="base-l">Base Form Input [type, value, undertext, isValid]</h3>
			</base-pre-section>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasePreSection from "@/components/base/BasePreSection.vue";
import BaseFormInput from "@/components/base/form/input/BaseFormInput.vue";

export default defineComponent({
	setup() {
		return {};
	},
	components: {
		BasePreSection,
		BaseFormInput,
	},
});
</script>

<style scoped></style>
