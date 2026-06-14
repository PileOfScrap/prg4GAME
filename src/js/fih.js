import { Resources } from './resources.js'
import { toXY, addAngle } from './functions.js'
import { Actor, Vector, Engine, randomInRange, Graphic, Util, randomIntInRange } from 'excalibur'
import { Bubble } from './bubble.js'

export class Fih extends Actor {

    moveDir

    

    constructor() {
        super()
        this.rand = randomIntInRange(1, 3)
        if(this.rand === 1) {
            this.graphics.use(Resources.Fih1.toSprite())
        } if(this.rand === 2) {
            this.graphics.use(Resources.Dopefih.toSprite())
        } if(this.rand === 3) {
            this.graphics.use(Resources.Crab.toSprite())
        }

        this.scale = new Vector (0.0, 0.0)
        
        this.pos = new Vector(randomInRange(0, 1280), randomInRange(0, 720))

        this.speed = 60
        this.on('exitviewport', (e) => this.remove())
    }

    remove() {
        this.scale = new Vector (0.0, 0.0)
        this.pos = new Vector(randomInRange(this.scene.camera.pos.x - 640, this.scene.camera.pos.x + 640), randomInRange(this.scene.camera.pos.y - 360, this.scene.camera.pos.y + 360))
        
    }

    onPreUpdate(engine) {
        this.vel = toXY(this.speed, this.dir)
        this.dir = addAngle(this.dir, (Math.random() - 0.5) * 15)
        if(this.scale.x < 0.15) {
            this.scale.x += 0.005
            this.scale.y += 0.005
        }

        if(Math.random() > 0.95) {
            let b = new Bubble(this.pos, this.dir)
            this.scene.add(b)
        }
    }


}