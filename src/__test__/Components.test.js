import { ValidateRoman, ConvertRoman } from '../Utils/Helpers'

test("ValidateRoman with right string", () => {
    expect(ValidateRoman("MMM")).toBeTruthy()
})

test("ValidateRoman with wrong string", () => {
    expect(ValidateRoman("qwerty")).toBeFalsy()
})

test("ConvertRoman with valid string", () => {
    expect(ConvertRoman("MMM",true)).toBe(3000)
})

test("ConvertRoman with invalid lowercase string", () => {
    expect(ConvertRoman("mmm",false)).toBe('')
})

test("ConvertRoman with not allowed string", () => {
    expect(ConvertRoman("rrty",false)).toBe('')
})