<template>
	<div>
		<div>
			<h2 class="base-xl my-1">Form</h2>
			<base-pre-section class="flex flex-col gap-2">
				<div class="flex gap-2 items-center">
					<base-form-input type="email" name="email" />
					<h3 class="base-l">Base Input</h3>
				</div>
				<div class="flex gap-2 items-center">
					<base-form-input type="password" name="password" />
					<h3 class="base-l">Base Password Input</h3>
				</div>
				<div class="flex gap-2 items-center">
					<base-form-label type="text" title="Name" />
					<h3 class="base-l">Base Labeled Input</h3>
				</div>
			</base-pre-section>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BasePreSection from "@/components/base/BasePreSection.vue";
import BaseFormInput from "@/components/base/form/input/BaseFormInput.vue";
import BaseFormLabel from "@/components/base/form/label/BaseFormLabel.vue";

export default defineComponent({
	setup() {
		return {};
	},
	components: {
		BasePreSection,
		BaseFormInput,
		BaseFormLabel
	},
});
</script>

<style scoped></style>
