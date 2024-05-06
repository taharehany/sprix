<template>
	<v-container>
		<v-sheet max-width="1400" class="mx-auto">
			<v-stepper v-model="currentStep" alt-labels>
				<Form
					v-slot="{ errors, isSubmitting }"
					:validation-schema="currentSchema"
					:initial-values="initialValues"
					keep-values
					@submit="nextStep"
				>
					<v-stepper-header>
						<template v-for="(step, i) in steps" :key="i">
							<v-stepper-item :value="i" :complete="currentStep > i">
								<template #title>
									<h4
										class="text-nowrap mb-2 font-bold"
										:class="{ 'text-secondary': currentStep === i }"
									>
										{{ step?.title }}
									</h4>
									<p class="text-nowrap">{{ step?.subtitle }}</p>
								</template>

								<template #icon>
									<AtomsStepIcon
										:is-active="step?.isActive"
										:is-completed="currentStep > i || stepsCompleted"
									/>
								</template>
							</v-stepper-item>

							<v-divider
								v-if="i !== steps.length - 1"
								class="opacity-100"
								thickness="2"
							/>
						</template>
					</v-stepper-header>

					<v-stepper-window>
						<v-stepper-window-item value="1">
							<v-row>
								<v-col cols="12">
									<Field v-slot="{ field }" name="full_name">
										<label for="identity" class="d-block mb-2">
											Full Name
										</label>

										<v-text-field
											v-bind="field"
											placeholder="Full Name"
											:error-messages="errors['full_name']"
										/>
									</Field>
								</v-col>

								<v-col cols="12">
									<Field v-slot="{ field }" name="phone_number">
										<label for="Phone Number" class="d-block mb-2">
											Phone Number
										</label>

										<v-text-field
											v-bind="field"
											placeholder="Phone Number"
											:error-messages="errors['phone_number']"
										/>
									</Field>
								</v-col>
							</v-row>
						</v-stepper-window-item>

						<client-only>
							<v-stepper-window-item value="2">
								<Field v-slot="{ field }" name="certificate">
									<v-radio-group
										v-bind="field"
										v-model="field.value"
										hide-details
										inline
										class="w-full"
									>
										<div
											class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4"
										>
											<label
												v-for="item in certificatesList"
												:key="item?.name"
												:for="item?.name"
												class="w-full"
											>
												<v-card
													elevation="3"
													width="100%"
													rounded="lg"
													hover
													:variant="
														field.value === item?.name
															? 'outlined'
															: 'flat'
													"
													:color="
														field.value === item?.name
															? 'primary'
															: 'white'
													"
												>
													<div class="text-end p-4 pb-0">
														<v-radio
															:id="item?.name"
															:value="item?.name"
														/>
													</div>

													<div class="text-center">
														<v-card-title
															class="pt-0 text-primary font-bold"
														>
															{{ item?.title }}
														</v-card-title>
														<span class="text-4xl font-bold">
															{{ item?.price }}
														</span>
														<v-card-text>
															{{ item?.description }}
														</v-card-text>
													</div>

													<v-list lines="one">
														<v-list-item
															v-for="itemList in item?.list"
															:key="itemList?.title"
														>
															<v-list-item-title>
																{{ itemList?.title }}
															</v-list-item-title>

															<template #prepend>
																<img
																	src="~/assets/images/icons/check.svg"
																	class="me-2"
																/>
															</template>
														</v-list-item>
													</v-list>
												</v-card>
											</label>
										</div>
									</v-radio-group>
								</Field>
							</v-stepper-window-item>

							<v-stepper-window-item value="3">
								<div class="text-center">
									<img
										src="~/assets/images/paymob-logo.png"
										alt=""
										class="mx-auto mt-10 mb-10"
									/>
									<h3 class="font-bold">Paymob</h3>
									<p>Payment with Paymob is available</p>
								</div>
							</v-stepper-window-item>

							<v-stepper-window-item value="4">
								<div class="text-center">
									<img
										src="~/assets/images/certificate.svg"
										alt=""
										class="mx-auto mt-10 mb-10"
									/>
								</div>
							</v-stepper-window-item>
						</client-only>
					</v-stepper-window>

					<v-stepper-actions class="flex justify-center px-16">
						<template #prev />

						<template #next>
							<v-btn
								v-if="currentStep < 2"
								color="primary"
								variant="elevated"
								class="px-10 font-bold"
								type="submit"
								:loading="isSubmitting"
								block
							>
								Submit
							</v-btn>

							<v-btn
								v-if="currentStep === 2"
								color="primary"
								variant="elevated"
								class="px-16 font-bold"
							>
								Payment
							</v-btn>

							<template v-if="currentStep === 3">
								<div class="flex gap-6">
									<v-btn
										color="primary"
										variant="elevated"
										class="px-16 font-bold"
										prepend-icon="mdi-tray-arrow-down"
										@click="stepsCompleted = true"
									>
										Download
									</v-btn>

									<v-btn
										color="gray"
										variant="elevated"
										class="px-16 font-bold"
										prepend-icon="mdi-send-outline"
									>
										Send Email
									</v-btn>
								</div>
							</template>
						</template>
					</v-stepper-actions>
				</Form>
			</v-stepper>
		</v-sheet>
	</v-container>
</template>
 
<script lang="ts" setup>
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

const validationSchema = computed(() => [
	toTypedSchema(
		zod.object({
			full_name: zod.string().min(1, { message: "The name is required" }),
			phone_number: zod
				.string()
				.min(1, { message: "The phone number is required" }),
		})
	),
	toTypedSchema(
		zod.object({
			certificate: zod.string(),
		})
	),
]);

const currentSchema = computed(() => {
	return validationSchema.value[currentStep.value];
});

const userRouter = useRouter(),
	userRoute = useRoute(),
	stepsCompleted = ref(false),
	currentStep = ref(userRoute.query.step ? Number(userRoute.query.step) : 0),
	initialValues = ref({
		full_name: "",
		phone_number: "",
		certificate: "two",
	}),
	steps = ref([
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
	certificatesList = ref([
		{
			title: "Certificate",
			price: "500 EGP",
			description: "Billed annually.",
			name: "one",
			list: [
				{
					title: "200+ integrations",
				},
				{
					title: "200+ integrations",
				},
				{
					title: "200+ integrations",
				},
			],
		},
		{
			title: "Certificate",
			price: "500 EGP",
			description: "Billed annually.",
			name: "two",
			list: [
				{
					title: "200+ integrations",
				},
				{
					title: "200+ integrations",
				},
				{
					title: "200+ integrations",
				},
			],
		},
		{
			title: "Certificate",
			price: "500 EGP",
			description: "Billed annually.",
			name: "three",
			list: [
				{
					title: "200+ integrations",
				},
				{
					title: "200+ integrations",
				},
				{
					title: "200+ integrations",
				},
			],
		},
	]);

function prevStep() {
	if (currentStep.value > 0) {
		currentStep.value -= 1;
	}
}

function nextStep(values: Record<string, string>) {
	if (currentStep.value === 3) {
		const formData = new FormData();

		Object.entries(values).forEach(([key, value]) => {
			return formData.append(key, value);
		});

		return;
	}

	if (currentStep.value < 3) currentStep.value++;
}

watch(
	currentStep,
	() => {
		userRouter.push({ query: { step: currentStep.value } });
		for (let i = 0; i < steps.value.length; i++) {
			if (i <= currentStep.value) {
				steps.value[i].isActive = true;
			} else steps.value[i].isActive = false;
		}
	},
	{ immediate: true }
);
</script>

<style scoped>
:deep(.v-stepper-item__avatar.v-avatar) {
	background: transparent !important;
}

:deep(.v-stepper-header) {
	box-shadow: none !important;
}

:deep(.v-stepper-item) {
	opacity: 1 !important;
}

:deep(.v-selection-control-group--inline) {
	flex-direction: column;
}
</style>