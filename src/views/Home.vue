<template>
	<div class="home">
		<h1 class="text-3xl font-bold underline">Home</h1>
		<base-button>test</base-button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default defineComponent({
	name: "Home",
	components: { BaseButton },
});
</script>
