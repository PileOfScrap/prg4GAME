import { Actor, CollisionContact, Vector, randomInRange } from 'excalibur'
import { Resources } from './resources.js'
import { addAngle, toXY} from './functions.js'

export class Bubble extends Actor {
    constructor(spawnerPos, spawnerDir) {
        super()
        if(Math.random() > 0.5) {
            this.graphics.use(Resources.Bubble.toSprite())
        } else {
            this.graphics.use(Resources.Bubble.toSprite())
        }
        this.scale = new Vector(0.15, 0.15)
        this.pos = spawnerPos
        this.dir = spawnerDir

        this.dir = addAngle(this.dir, 180)
        this.dir = addAngle(this.dir, randomInRange(45, -45))
        this.transform.z = -5

        
    }

    onInitialize(engine) {
    }

    onPreUpdate() {
        this.graphics.opacity = this.graphics.opacity -0.02
        this.vel = toXY(30, this.dir)
        if(this.graphics.opacity < 0) {
            this.kill()
        }

        if(this.graphics.opacity < 0.6) {
            this.graphics.use(Resources.Bubble2.toSprite())
        }
    }
    
    
}