import useValidation from "@/composables/useValidation";
import { ValidationFunction } from "@/composables/useValidation"

test("password validation test", () => {
	const passValidation: ValidationFunction = useValidation("password")
	const wrongPasswords: string[]  = [
		"",
		" ",
		"123",
		"qwerty",
		"QWERTY123",
		"qwe123@",
	]
	wrongPasswords.forEach((el: string) => {
		expect(passValidation(el)).toBe(false)
	})
})
