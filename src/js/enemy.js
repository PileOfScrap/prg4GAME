import { Actor, randomInRange, Graphic, randomIntInRange, Engine, Vector, CircleCollider,  CollisionType, BodyComponent, DegreeOfFreedom } from 'excalibur'
import { PC } from './PC.js'
import { toXY, addAngle, vectorDiff, getFacing } from './functions.js'
import { Resources, Anims } from './resources.js'

export class EnemyBase extends Actor {
    health
    constructor(spawnerpos, size, score) {
        super()
        this.collider.set(new CircleCollider({
            radius: size,
            linearDampening: 20
        }))
        this.body.collisionType = CollisionType.Active
        this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
        this.body.useGravity = false

        this.body.mass = 1

        this.addTag('ENEMY')
        this.scale = new Vector(0.15, 0.15)
        this.dir = 0

        this.pos = spawnerpos
        this.score = score
    }

    // custom


    dodge(str) {
        let temp = vectorDiff(this.scene.PLAYER.pos, this.pos)

        temp = temp.normalize()
        temp = temp.scale(str)
        this.body.applyImpulse(1, temp)
    }



    takeDamage(amount) {
        this.actions.flash()
        this.health -= amount

        if(this.health < 0) {
            this.scene.addScore(this.score)
            if (typeof this.deathEffect === "function") {
                this.deathEffect() // if enemy has death effect, trigger it, otherwise just dw its fine
            }
            this.kill()
        }
    }




}