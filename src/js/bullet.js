import { Actor, CollisionContact, Vector, randomInRange } from 'excalibur'
import { Resources } from './resources.js'
import { addAngle, toXY } from './functions.js'

export class Bullet extends Actor {
    constructor(spawnerPos, spawnerDir) {
        super({
            width: 200,
            height: 200
        })

        this.graphics.use(Resources.Proj.toSprite())
        this.scale = new Vector(0.075, 0.075)
        this.pos = spawnerPos
        this.dir = spawnerDir

        this.transform.z = -5

        this.on('collisionstart', (e) => {
            let target = e.other.owner
            if (target && target.hasTag('ENEMY') ) {
                
                this.kill()
                target.takeDamage(1)
                target.dodge(20)
            }

        })
        
    }

    onInitialize(engine) {
    }

    onPreUpdate() {
        this.graphics.opacity = this.graphics.opacity -0.002
        this.vel = toXY(500, this.dir)
        if(this.graphics.opacity < 0) {
            this.kill()
        }

    }
    
    
}