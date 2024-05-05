<template>
	<div class="container mx-auto">
		<div class="grid grid-cols-4">
			<div
				v-for="(step, index) in steps"
				:key="step?.title"
				:class="{ 'text-primary': currentStep === steps.indexOf(step) }"
			>
				<div
					class="mb-4 flex items-center"
					:class="{ 'justify-end': index !== steps.length - 1 }"
				>
					<span
						v-if="index !== 0"
						class="icon-line border-2"
						:class="{
							'border-primary': steps[index -1]?.isActive,
						}"
					/>

					<svg
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
							fill="#F9F5FF"
						/>
						<rect
							x="1"
							y="1.33234"
							width="30"
							height="30"
							rx="15"
							:stroke="step?.isActive ? '#F19DBB' : '#EAECF0'"
							stroke-width="2"
						/>
						<circle
							cx="16"
							cy="16.3323"
							r="5"
							:fill="step?.isActive ? '#F19DBB' : '#EAECF0'"
						/>
					</svg>

					<span
						v-if="index !== steps.length - 1"
						class="icon-line border-2"
						:class="{
							'border-primary': steps[index + 1]?.isActive,
						}"
					/>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-4">
			<div
				v-for="(step, index) in steps"
				:key="index"
				:class="{ 'text-primary': currentStep === index }"
			>
				<div class="text-center">
					<div>
						<h1>{{ step?.title }}</h1>
						<p>{{ step?.subtitle }}</p>
					</div>
				</div>
			</div>
		</div>

		<div
			v-for="(step, index) in steps"
			:key="index"
			:class="{ 'text-primary': currentStep === index }"
		>
			<template v-if="currentStep === index">
				<div v-show="currentStep === 0">
					<h1>descr</h1>
					<p />
				</div>

				<div v-show="currentStep === 1">
					<h1>{{ step }}</h1>
				</div>

				<div v-show="currentStep === 2">
					<h1>{{ step }}</h1>
				</div>

				<div v-show="currentStep === 3">
					<h1>{{ step }}</h1>
				</div>
			</template>
		</div>

		<button :disabled="currentStep === 0" @click="prevStep">Prev</button>
		<button :disabled="currentStep === steps.length - 1" @click="nextStep">
			Next
		</button>
	</div>
</template>
 
<script lang="ts" setup>
const steps = ref([
		{
			title: "Your details",
			subtitle: "Name and email",
			isActive: true,
		},
		{
			title: "Choose certificate",
			subtitle: "Website and location",
			isActive: false,
		},
		{
			title: "Choose Payment",
			subtitle: "Start collaborating",
			isActive: false,
		},
		{
			title: "Download Certificate",
			subtitle: "Automatic sharing",
			isActive: false,
		},
	]),
	currentStep = ref(0);

const prevStep = () => {
	if (currentStep.value > 0) {
		currentStep.value -= 1;
	}

	if (currentStep.value !== 0) {
		steps.value[currentStep.value].isActive = false;
	}
};

const nextStep = () => {
	if (currentStep.value < steps.value.length - 1) {
		currentStep.value += 1;
		steps.value[currentStep.value].isActive = true;
	}
};
</script>

<style scoped>
.is-active {
	font-weight: bold;
}

.icon-line {
	width: calc(50% - 16px);
}
</style>