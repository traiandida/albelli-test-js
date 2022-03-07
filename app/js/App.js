import Canvas from "./components/Canvas";
import FileInput from "./components/FileInput";
import Events from "./events";

class App{
    constructor(){
        this.init();
    }
    init(){        
        this.fileInput = new FileInput(document.getElementById("fileSelector"))
        this.canvas = new Canvas(document.getElementById("editorCanvas"))        

        document.addEventListener(Events.EVENT_CHANGE_FILE, (ev) => this.inputFileHandler(ev))
        
             
    }
    inputFileHandler(ev){
        const {file,x,y,width, height} = ev.detail
        this.canvas.drawImage(file,x,y, width, height);
    }
}

export default App