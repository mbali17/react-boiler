// @flow

export type Triggers= {
  setName: Function,
  setEmail: Function,
  setCompany: Function,
  setPhone: Function,
}

export type InputFieldParams = {
    captureField: Function,
    name: string,
    triggers: Triggers
}

export type Values = {
  name: string,
  email: string,
  company: string,
  phone: string
}

export type InputEvent = {
  preventDefault: Function,
  target: {
    id: string,
    value: string,
    type: string,
  }
}
