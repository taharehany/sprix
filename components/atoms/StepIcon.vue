<template>
	<img
		v-if="isCompleted && isActive"
		src="~/assets/images/icons/check-complete.svg"
	/>

	<svg
		v-else-if="isActive"
		width="40"
		height="41"
		viewBox="0 0 40 41"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_d_93_175)">
			<g clip-path="url(#clip0_93_175)">
				<rect
					x="4"
					y="4.33234"
					width="32"
					height="32"
					rx="16"
					fill="#F9F5FF"
				/>
				<rect
					x="5"
					y="5.33234"
					width="30"
					height="30"
					rx="15"
					fill="#F9F5FF"
				/>
				<rect
					x="5"
					y="5.33234"
					width="30"
					height="30"
					rx="15"
					stroke="#F19DBB"
					stroke-width="2"
				/>
				<circle cx="20" cy="20.3323" r="5" fill="#F19DBB" />
			</g>
		</g>
		<defs>
			<filter
				id="filter0_d_93_175"
				x="0"
				y="0.332336"
				width="40"
				height="40"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feMorphology
					radius="4"
					operator="dilate"
					in="SourceAlpha"
					result="effect1_dropShadow_93_175"
				/>
				<feOffset />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.956863 0 0 0 0 0.921569 0 0 0 0 1 0 0 0 1 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_93_175"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect1_dropShadow_93_175"
					result="shape"
				/>
			</filter>
			<clipPath id="clip0_93_175">
				<rect
					x="4"
					y="4.33234"
					width="32"
					height="32"
					rx="16"
					fill="white"
				/>
			</clipPath>
		</defs>
	</svg>

	<svg
		v-else
		width="32"
		height="33"
		viewBox="0 0 32 33"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="1"
			y="1.33234"
			width="30"
			height="30"
			rx="15"
			stroke="#EAECF0"
			stroke-width="2"
		/>
		<circle cx="16" cy="16.3323" r="5" fill="#EAECF0" />
	</svg>
</template>

<script setup lang="ts">
interface Props {
	isActive: boolean;
	isCompleted: boolean;
}

defineProps<Props>();
</script>
