import { ALLOWED_FILE_TYPES, CANVAS_HEIGHT, CANVAS_WIDTH, JSON_TYPE } from "../../constants";
import Events from "../../events";
import { inchToPixel } from "../../utils/inchToPixel";

class FileInput{
    constructor(HTMLElement){
        this.fileInput = HTMLElement;
        this.init();  
    }
    init(){
        this.fileInput.addEventListener("change", (ev) => this.changeFile(ev))
    }


    changeFile(ev){
        
        this.file = ev.target.files[0]
        if(ALLOWED_FILE_TYPES.includes(this.file.type)){
        
            if(this.file.type === JSON_TYPE){
                this.handleJSONFile();
            }else{
                this.handleImageFile();
            }
        }else{            
            alert("File type not allowed, only image or json types allowed.")            
        }
    }

    handleImageFile(){
        const reader = new FileReader();
            reader.onloadend = () =>{
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {

                    if (img.naturalWidth < inchToPixel(CANVAS_WIDTH) || img.naturalHeight < inchToPixel(CANVAS_HEIGHT)){
                        alert(`Image to small, image file should be grater than: ${CANVAS_WIDTH}"x${CANVAS_HEIGHT}"` )
                        return;
                    }

                    let evt = new CustomEvent(Events.EVENT_CHANGE_FILE,{
                        detail: {
                            file : img,
                            x: 0,
                            y: 0,
                            width : img.naturalWidth,
                            height: img.naturalHeight,
                            scale: 1
                        },
                        bubbles: true                            
                    })
                    this.fileInput.dispatchEvent(evt);
                }
            }
            reader.readAsDataURL(this.file);              

            return;
    }

    handleJSONFile(){
        
        return;
    }
    
}

export default FileInput