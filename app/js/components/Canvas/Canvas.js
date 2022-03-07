import { CANVAS_HEIGHT_PX, CANVAS_WIDTH_PX } from "../../constants"

class Canvas{
    constructor(HTMLElement){
        this.canvas = HTMLElement        
        this.init()
    }
    init(){
        this.canvas.width = CANVAS_WIDTH_PX
        this.canvas.height = CANVAS_HEIGHT_PX
        this.ctx = this.canvas.getContext('2d')

    }
    drawImage(file, x = 0, y = 0, width, height ){
       this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
       this.ctx.drawImage(file,x,y,width,height )
    }
    
    
}
export default Canvas