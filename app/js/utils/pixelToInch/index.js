import { PIXLES_PER_INCH } from '../../constants';

// eslint-disable-next-line import/prefer-default-export
export const pixelToInch = (px) => parseFloat(px / PIXLES_PER_INCH);
