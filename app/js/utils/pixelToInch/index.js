import { PIXLES_PER_INCH } from "../../constants"

export const pixelToInch = (px) => {
    return parseFloat(px / PIXLES_PER_INCH)
}