import {
  ALLOWED_FILE_TYPES, CANVAS_HEIGHT, CANVAS_WIDTH, JSON_TYPE,
} from '../../constants';
import Events from '../../events';
import { inchToPixel } from '../../utils';

class FileInput {
  constructor(HTMLElement) {
    this.fileInput = HTMLElement;
    this.init();
  }

  init() {
    this.fileInput.addEventListener('change', (ev) => this.changeFile(ev));
  }

  changeFile(ev) {
    this.file = ev.target.files[0];
    if (ALLOWED_FILE_TYPES.includes(this.file.type)) {
      if (this.file.type === JSON_TYPE) {
        this.handleJSONFile();
      } else {
        this.handleImageFile();
      }
    } else {
      alert('File type not allowed, only image or json types allowed.');
    }
  }

  handleImageFile() {
    const reader = new FileReader();
    reader.onloadend = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        if (img.naturalWidth < inchToPixel(CANVAS_WIDTH)
        || img.naturalHeight < inchToPixel(CANVAS_HEIGHT)) {
          alert(`Image to small, image file should be grater than: ${CANVAS_WIDTH}"x${CANVAS_HEIGHT}"`);
          return;
        }

        const evt = new CustomEvent(Events.EVENT_CHANGE_FILE, {
          detail: {
            file: img,
            x: 0,
            y: 0,
            width: img.naturalWidth,
            height: img.naturalHeight,
            scale: 1,
          },
          bubbles: true,
        });
        this.fileInput.dispatchEvent(evt);
      };
    };
    reader.readAsDataURL(this.file);
  }

  handleJSONFile() {
    const reader = new FileReader();
    reader.readAsText(this.file);

    reader.onloadend = () => {
      let data = JSON.parse(reader.result);
      data = data.canvas.photo;

      const img = new Image();
      img.src = data.id;

      img.onload = () => {
        const evt = new CustomEvent(Events.EVENT_CHANGE_FILE, {
          detail: {
            file: img,
            x: data.x,
            y: data.y,
            width: data.width,
            height: data.height,
            scale: data.scale,
          },
          bubbles: true,
        });
        this.fileInput.dispatchEvent(evt);
      };
    };
  }
}

export default FileInput;
