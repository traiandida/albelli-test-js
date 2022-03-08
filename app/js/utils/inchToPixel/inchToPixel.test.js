import { inchToPixel } from "."

test('15 inches to pixel' , () => {
    expect(inchToPixel(15)).toBe(1440)
})
test('10 inches to pixel', () => {
    expect(inchToPixel(10)).toBe(960)
})
test('0 inches to pixel', () => {
    expect(inchToPixel(0)).toBe(0)
})