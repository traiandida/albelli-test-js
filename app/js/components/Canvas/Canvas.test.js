import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../../constants';
import { inchToPixel } from '../../utils';
import Canvas from './Canvas';

describe('Canvas', () => {
  let canvas;
  beforeEach(() => {
    document.body.innerHTML = '<canvas id="editorCanvas"></canvas>  ';
    canvas = new Canvas(document.getElementById('editorCanvas'));
  });
  test('Canvas is rendered', () => {
    expect(canvas.canvas).toBeDefined();
  });
  test('Canvas rendered width', () => {
    expect(canvas.canvas.width).toBe(inchToPixel(CANVAS_WIDTH));
  });
  test('Canvas rendered height', () => {
    expect(canvas.canvas.height).toBe(inchToPixel(CANVAS_HEIGHT));
  });
});
