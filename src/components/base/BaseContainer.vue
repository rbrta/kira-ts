<template>
	<div class="container">
		<slot />
	</div>
</template>

<style lang="scss" scoped>
.container {
	width: 100%;
	max-width: 152rem;
	margin: 0 auto;
	position: relative;

	@media screen and (min-width: $desktop) {
		padding: 0 7.5rem;
	}

	&::v-deep & {
		padding: 0;
	}
}
</style>
