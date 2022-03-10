import { PIXLES_PER_INCH } from '../../constants';

// eslint-disable-next-line import/prefer-default-export
export const inchToPixel = (inch) => parseFloat(inch * PIXLES_PER_INCH);
