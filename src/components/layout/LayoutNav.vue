<template>
	<nav class="flex gap-2">
		<router-link to="/" class="nav-link">Home</router-link>
		<router-link to="/about" class="nav-link">About</router-link>
		<router-link to="/kit" class="nav-link">UI</router-link>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	},
});
</script>

<style scoped lang="scss">
.nav-link {
	transition: all 0.3s linear;
	// @include base-m;
	&:hover {
		text-decoration: underline;
	}
}
</style>
