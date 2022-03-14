import { Canvas, Control, FileInput } from './components';
import { JSON_FILE_NAME } from './constants';
import Events from './events';

class App {
  constructor() {
    this.init();
  }

  init() {
    this.fileInput = new FileInput(document.getElementById('fileSelector'));
    this.canvas = new Canvas(document.getElementById('editorCanvas'));
    this.control = new Control();

    // Custom events
    document.addEventListener(Events.EVENT_CHANGE_FILE, (ev) => this.inputFileHandler(ev));

    // All this events could be grouped in only one event ex. EVENT_IMAGE_CHANGE but I think is more
    // scalable to separate events triggers.
    document.addEventListener(Events.EVENT_MOVE_UP, (ev) => this.imageControlHandler(ev));
    document.addEventListener(Events.EVENT_MOVE_DOWN, (ev) => this.imageControlHandler(ev));
    document.addEventListener(Events.EVENT_MOVE_LEFT, (ev) => this.imageControlHandler(ev));
    document.addEventListener(Events.EVENT_MOVE_RIGHT, (ev) => this.imageControlHandler(ev));
    document.addEventListener(Events.EVENT_SCALE_UP, (ev) => this.imageControlHandler(ev));
    document.addEventListener(Events.EVENT_SCALE_DOWN, (ev) => this.imageControlHandler(ev));

    document.addEventListener(Events.EVENT_EXPORT_JSON, () => this.exportToJson());
  }

  inputFileHandler(ev) {
    const {
      file, x, y, width, height, scale,
    } = ev.detail;
    this.canvas.initCanvas(file, x, y, width, height, scale);
  }

  imageControlHandler(ev) {
    const { x, y, scale } = ev.detail;
    this.canvas.drawImage(x, y, scale);
  }

  exportToJson() {
    const data = {
      canvas: {
        width: this.canvas.canvas.width,
        height: this.canvas.canvas.height,
        photo: {
          id: this.canvas.file.src,
          width: this.canvas.width,
          height: this.canvas.height,
          x: this.canvas.x,
          y: this.canvas.y,
          scale: this.canvas.scale,
        },
      },
    };

    const linkElement = document.createElement('a');
    linkElement.href = `data:application/octet-stream,${encodeURIComponent(JSON.stringify(data))}`;
    linkElement.download = JSON_FILE_NAME;
    linkElement.click();
  }
}

export default App;
