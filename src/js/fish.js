import { Resources } from "./resources.js";
import { Actor, randomInRange, Vector, Keys, Engine} from "excalibur";
import { Bone } from './bone.js'



export class Fish extends Actor{
    
    constructor() {
        super({width: 100, height: 100})
        this.graphics.use(Resources.Fish.toSprite())
        this.pos = new Vector(randomInRange(10, 700), randomInRange(10, 300))
        this.vel = new Vector(randomInRange(-40, -120), randomInRange(-10, 10))
        this.events.on("exitviewport", (e) => this.fishLeft(e))
        this.addTag('fish')
    }

    onInitialize(engine) {
        this.kd = engine.input.keyboard
    }

    fishLeft() {
        this.pos = new Vector(640, randomInRange(5, 715))
    }

}