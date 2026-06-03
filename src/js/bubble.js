import { Actor, CollisionContact, Vector } from 'excalibur'
import { Resources } from './resources.js'
import { Fish } from './fish.js'
import { Bone } from './bone.js'

export class Bubble extends Actor {
    constructor(sharkPos) {
        super({
            width: 200,
            height: 200
        })
        this.graphics.use(Resources.Bubble.toSprite())
        this.pos = sharkPos
        this.on('collisionstart', (e) => {
            let target = e.other.owner
            console.log(target.name)
            if (target && target.hasTag('fish') ) {
                
                let bone = new Bone(target.pos)
                console.log('addboneattempt')
                this.scene.add(bone)
                target.kill();

            }

        })
    }

    onInitialize(engine) {
        this.vel = new Vector(500, 0)
    }

    onPreUpdate() {
        this.graphics.opacity = this.graphics.opacity -0.02
        if(this.graphics.opacity < 0) {
            this.kill()
            console.log('pop!')
        }
    }
    
    
}