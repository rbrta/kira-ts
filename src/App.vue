<template>
	<main>
		<base-container>
			<header class="flex justify-between items-center py-4">
				<div class="flex items-center gap-2">
					<img src="./assets/logo.png" class="w-5 h-5" />
					<h1 class="base-xxl">
						{{ title }}
					</h1>
				</div>
				<layout-nav />
			</header>
			<router-view />
		</base-container>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseContainer from "./components/base/BaseContainer.vue";
import LayoutNav from "./components/layout/LayoutNav.vue";
export default defineComponent({
	components: {
		BaseContainer,
		LayoutNav,
	},
	computed: {
		title(): string {
			return (String(this.$route.name) || "???").toUpperCase();
		},
	},
});
</script>
