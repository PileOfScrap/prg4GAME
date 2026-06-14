import { Resources } from "./resources.js"
import { Actor, randomInRange, Vector, Keys, Engine} from "excalibur";
import { Bubble } from './bubble.js'

export class Shark extends Actor {
    constructor(upkey, downkey, leftkey, rightkey) {
        super({width: 200, height: 200})
        this.graphics.use(Resources.Shark.toSprite())
        this.pos = new Vector(1280/2, 720/2)
        this.speedx = 0
        this.speedy = 0
        this.speed = 15
        this.up = upkey
        this.down = downkey
        this.left = leftkey
        this.right = rightkey
    }

    onInitialize(engine) {
        this.kd = engine.input.keyboard
        
    }

    

    onColissionStart(engine, other) {
        other.owner.kill()
        console.log('COLLIDED')
    }

    onPreUpdate(engine) {
        this.speedx = 0
        this.speedy = 0

        if (this.kd.isHeld(this.up)) {
            this.speedy -= this.speed
        }
        if (this.kd.isHeld(this.down)) {
            this.speedy += this.speed
        }
        if (this.kd.isHeld(this.left)) {
            this.speedx -= this.speed
        }
        if (this.kd.isHeld(this.right)) {
            this.speedx += this.speed
        }

        this.pos.x = this.pos.x + this.speedx
        this.pos.y = this.pos.y + this.speedy

        if(this.kd.wasPressed(Keys.Space)) {
            this.shoot()
            console.log('shooted')
        }
    }
    shoot() {
        const bubble = new Bubble(this.pos)
        this.scene.add(bubble)
        console.log('trynashoot')
    }
   
        
    
}