import { CANVAS_HEIGHT, CANVAS_WIDTH } from "../../constants"
import { inchToPixel } from "../../utils"

class Canvas{
    constructor(HTMLElement){
        this.canvas = HTMLElement        
        this.init()
    }
    init(){
        this.canvas.width = inchToPixel(CANVAS_WIDTH)
        this.canvas.height = inchToPixel(CANVAS_HEIGHT)

        this.ctx = this.canvas.getContext('2d')

    }

    initCanvas(file, x, y, width, height,scale){

        this.file = file
        this.x = x
        this.y = y
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
        let heightDiff = (this.height * scale) - this.canvas.height

        // console.log(xDiff, widthDiff);
        // console.log(yDiff, heightDiff);

        //Check x limits
        if(xDiff > widthDiff){
            valid = false
        }else if(xDiff + widthDiff < widthDiff){
            valid = false
        }
        // Check y limits        
        if(yDiff > heightDiff){
            valid = false;
        }else if (yDiff + heightDiff < heightDiff){
            valid =  false;
        }
        // console.log(valid);
        return valid;

    }
    
    
}
export default Canvas