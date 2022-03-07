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

    initCanvas(file, x, y, width, height,scale){

        this.file = file
        this.x = 0
        this.y = 0
        this.width = width
        this.height = height
        this.scale = scale
        this.drawImage(this.x, this.y, this.scale)
     
    }

    drawImage(x, y,scale){

        

        this.x += x
        this.y += y
        this.scale += scale

        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.file,this.x,this.y,(this.width * this.scale),(this.height * this.scale) )
    }

   
    
    
}
export default Canvas