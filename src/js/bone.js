import { Actor, Vector, Graphic } from "excalibur";
import { Resources } from "./resources.js";

export class Bone extends Actor {
    constructor(fishPos) {
        super()
        console.log("FISH BONES")
        this.pos = fishPos
        this.graphics.use(Resources.Bone.toSprite())
        this.vel = new Vector (0, -20)
        this.events.on('exitviewport', () => {
            this.kill()
        })
    }

    onPreUpdate() {
        this.vel.y += 0.5
        if(this.vel.y > 0) {
            this.graphics.flipVertical = 1
        }
    }

    on
    
}