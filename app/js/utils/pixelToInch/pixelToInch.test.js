import { pixelToInch } from "."

test('1440 px to inches' , () => {
    expect(pixelToInch(1440)).toBe(15)
})
test('960 px to inches', () => {
    expect(pixelToInch(960)).toBe(10)
})
test('0 px to inches', () => {
    expect(pixelToInch(0)).toBe(0)
})