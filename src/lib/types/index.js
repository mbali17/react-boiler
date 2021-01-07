// @flow

export type Triggers= {
  setName: Function,
  setEmail: Function,
  setCompany: Function,
  setPhone: Function,
}

export type InputFieldParams = {
    captureField: Function,
    fieldName: string,
    triggers: Triggers
}

export type Values = {
  name: string,
  email: string,
  company: string,
  phone: string
}

export type event = {
    preventDefault: Function,
    target: {
      id: string,
      value: string
    }
  }
