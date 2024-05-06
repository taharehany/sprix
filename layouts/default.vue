<template>
	<v-app>
		<v-layout>
			<v-main class="pt-0" style="min-height: 100vh">
				<AppHeader />
				<div style="min-height: 100vh">
					<slot />
				</div>
			</v-main>
		</v-layout>
	</v-app>
</template>