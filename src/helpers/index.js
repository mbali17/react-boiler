export function submitForm(e, values) {
  e.preventDefault();
  console.log(`submitting form with values Name: ${values.name}, Email: ${values.email}, Company: ${values.company}, Phone: ${values.phone}`);
}

export default submitForm;
