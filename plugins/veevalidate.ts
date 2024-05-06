import { Form, Field, FieldArray, ErrorMessage } from 'vee-validate';

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.component('Form', Form);
  vueApp.component('Field', Field);
  vueApp.component('FieldArray', FieldArray);
  vueApp.component('ErrorMessage', ErrorMessage);
});
