const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function emailValidation (value: string):boolean { return emailRegex.test(value.trim().toLowerCase())}

const passwordRegex = /^(?=.*\d)(?=.*?[a-zA-Z])(?=.*?[\W]).{8,}$/
function passwordValidation (value: string):boolean { return passwordRegex.test(value.trim()) }

const telRegex = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{10}$/
function telValidation (value: string):boolean { return telRegex.test(value.trim()) }

function textValidation (value: string):boolean { return value.split('').length > 0}

export type ValidationFunction = (value: string) => boolean
export default (type = "text"): ValidationFunction => {
	switch (type) {
		case "text": return textValidation
		case "password": return passwordValidation
		case "tel": return telValidation
		case "email": return emailValidation
		default: return textValidation
	}
}
