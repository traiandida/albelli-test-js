import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants';
import { inchToPixel } from '../../utils';

class Canvas {
  constructor(HTMLElement) {
    this.canvas = HTMLElement;
    this.init();
  }

  init() {
    this.canvas.width = inchToPixel(CANVAS_WIDTH);
    this.canvas.height = inchToPixel(CANVAS_HEIGHT);
    this.ctx = this.canvas.getContext('2d');
  }

  initCanvas(file, x, y, width, height, scale) {
    this.file = file;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.scale = scale;
    this.drawImage(this.x, this.y, this.scale);
  }

  drawImage(x, y, scale) {
    if (!this.checkLimits(this.x + x, this.y + y, scale)) return;

    this.x += x;
    this.y += y;

    if (this.scale !== scale) {
      this.scale += scale;
    }

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(
      this.file,
      this.x,
      this.y,
      (this.width * this.scale), (
        this.height * this.scale),
    );
  }

  checkLimits(x, y, scale) {
    let auxScale = scale;

    if (this.scale !== scale) {
      auxScale += this.scale;
    }

    let valid = true;

    const xDiff = (this.width * auxScale) + x - this.canvas.width;
    const widthDiff = (this.width * auxScale) - this.canvas.width;

    const yDiff = (this.height * auxScale) + y - this.canvas.height;
    const heightDiff = (this.height * auxScale) - this.canvas.height;

    // Check x limits
    if (xDiff > widthDiff) {
      valid = false;
    } else if (xDiff + widthDiff < widthDiff) {
      valid = false;
    }
    // Check y limits
    if (yDiff > heightDiff) {
      valid = false;
    } else if (yDiff + heightDiff < heightDiff) {
      valid = false;
    }

    return valid;
  }
}
export default Canvas;
