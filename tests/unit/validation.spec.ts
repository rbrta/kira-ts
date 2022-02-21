import useValidation from "@/composables/useValidation";
import { ValidationFunction } from "@/composables/useValidation"

describe("validation test", () => {
	const passValidation: ValidationFunction = useValidation("password")
	const emailValidation: ValidationFunction = useValidation("email")
	const phoneValidation: ValidationFunction = useValidation("phone")

	test("password invalid", () => {
		const invalidPasswords: string[]  = [
			"",
			" ",
			"123",
			"123456789",
			"qwerty",
			"QWERTY123",
			"qwe123@",
			"!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
		]
		invalidPasswords.forEach((el: string) => {
			expect(passValidation(el)).toBe(false)
		})
	})

	test("password valid", () => {
		const validPasswords: string[] = [
			"qwerty123!",
			"@@@@@@@@@@@qwe3",
			"12345678q!",
			"q1!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
		]
		validPasswords.forEach((el: string) => {
			expect(passValidation(el)).toBe(true)
		})
	})

	test("email invalid", () => {
		const emailInvalid: string[] = [
			"",
			" ",
			"a",
			"a@",
			"a@.co",
			"a.com",
			"a@@gmail.com",
		]
		emailInvalid.forEach((el: string) => {
			expect(emailValidation(el)).toBe(false)
		})
	})

	test("email valid", () => {
		const emailValid: string[] = [
			"a@a.co",
			"aqwe1@gmail.com",
			"_qw-ew@mail.ydsfdfdsf"
		]
		emailValid.forEach((el: string) => {
			expect(emailValidation(el)).toBe(true)
		})
	})
})
