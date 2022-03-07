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

        if(!this.checkLimits(this.x + x , this.y + y , scale)) return;
        
        this.x += x
        this.y += y

        if(this.scale !== scale) {
            this.scale += scale
        }

        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.ctx.drawImage(this.file,this.x,this.y,(this.width * this.scale),(this.height * this.scale) )
    }

    checkLimits(x, y, scale){

        if(this.scale !== scale){
            scale +=this.scale
        }

        let valid = true;

        let xDiff = (this.width * scale ) + x - this.canvas.width
        let widthDiff = (this.width * scale) - this.canvas.width

        let yDiff = (this.height * scale) + y - this.canvas.height 
        let hightDiff = (this.height * scale) - this.canvas.height

        //Check x limits
        if(xDiff > widthDiff){
            valid = false
        }else if(xDiff + widthDiff < widthDiff){
            valid = false
        }
        // Check y limits        
        if(yDiff > hightDiff){
            valid = false;
        }else if (yDiff + hightDiff < hightDiff){
            valid =  false;
        }
        
        return valid;

    }
    
    
}
export default Canvas