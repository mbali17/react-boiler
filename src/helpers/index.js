// @flow
export function captureField(e: { target: { id: string, value: string}}, triggers: { setName: Function, setEmail: Function, setCompany: Function, setPhone: Function}) {
  const { id, value } = e.target;
  switch (id) {
    case 'name':
      triggers.setName(value);
      break;
    case 'email':
      triggers.setEmail(value);
      break;
    case 'company':
      triggers.setCompany(value);
      break;
    case 'phone':
      triggers.setPhone(value);
      break;
    default:
      console.log('This is the default case');
  }
}

export function submitForm(e: { preventDefault: Function }, values: { name: string, email: string, company: string, phone: string }) {
  e.preventDefault();
  console.log(`submitting form with values Name: ${values.name}, Email: ${values.email}, Company: ${values.company}, Phone: ${values.phone}`);
}

export default submitForm;
