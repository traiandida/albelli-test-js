import { MOVEMENT_PX, SCALE_PERCENTAGE } from "../../constants";
import Events from "../../events";


class Control {
    constructor(){

        //Control buttons selectors
        this.moveUpBtn = document.getElementById("js-moveup-btn")
        this.moveDownBtn = document.getElementById("js-movedown-btn")
        this.moveLeftBtn = document.getElementById("js-moveleft-btn")
        this.moveRightBtn = document.getElementById("js-moveright-btn")

        this.scaleUpBtn = document.getElementById("js-scaleup-btn");
        this.scaleDownBtn = document.getElementById("js-scaledown-btn")

        this.init()
    }

    init(){
        this.moveUpBtn.addEventListener("click", (ev) => this.moveUp() )
        this.moveDownBtn.addEventListener("click", (ev) => this.moveDown() )
        this.moveLeftBtn.addEventListener("click", (ev) => this.moveLeft() )
        this.moveRightBtn.addEventListener("click", (ev) => this.moveRight() )

        this.scaleUpBtn.addEventListener("click", (ev) => this.scaleUp() )
        this.scaleDownBtn.addEventListener("click", (ev) => this.scaleDown() )
        
    }
    moveUp(){
        this.moveUpBtn.dispatchEvent(new CustomEvent(Events.EVENT_MOVE_UP,{
            detail: {
                x: 0,
                y: -MOVEMENT_PX,
                scale:0
            },
            bubbles: true
        }))
    }
    moveDown(){
        this.moveDownBtn.dispatchEvent(new CustomEvent(Events.EVENT_MOVE_DOWN,{
            detail: {
                x: 0,
                y: MOVEMENT_PX,
                scale:0
            },
            bubbles: true
        }))
    }
    moveLeft(){
        this.moveLeftBtn.dispatchEvent(new CustomEvent(Events.EVENT_MOVE_LEFT,{
            detail: {
                x: -MOVEMENT_PX,
                y: 0,
                scale:0
            },
            bubbles: true
        }))
    }
    moveRight(){
        this.moveRightBtn.dispatchEvent(new CustomEvent(Events.EVENT_MOVE_RIGHT,{
            detail: {
                x: MOVEMENT_PX,
                y: 0,
                scale:0
            },
            bubbles: true
        }))
    }
    scaleUp(){
        this.scaleUpBtn.dispatchEvent(new CustomEvent(Events.EVENT_SCALE_UP,{
            detail: {
                x: 0,
                y: 0,
                scale:SCALE_PERCENTAGE
            },
            bubbles: true
        }))
    }
    scaleDown(){
        this.scaleDownBtn.dispatchEvent(new CustomEvent(Events.EVENT_SCALE_DOWN,{
            detail: {
                x: 0,
                y: 0,
                scale:-SCALE_PERCENTAGE
            },
            bubbles: true
        }))
    }
}
export default Control