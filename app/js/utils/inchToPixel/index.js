import { PIXLES_PER_INCH } from "../../constants"

export const inchToPixel = (inch) => {
    return parseFloat(inch * PIXLES_PER_INCH)
}