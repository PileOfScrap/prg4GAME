import { Actor, randomInRange, Graphic, randomIntInRange, Engine, Vector, CircleCollider,  CollisionType, BodyComponent, DegreeOfFreedom } from 'excalibur'
import { PC } from './PC.js'
import { toXY, addAngle, vectorDiff, getFacing } from './functions.js'
import { Resources } from './resources.js'
import { EnemyBase } from './enemy.js'

export class Sprinter extends EnemyBase {
    constructor(spawnerPos) {
        super(spawnerPos, 200, 50)
        this.graphics.use(Resources.Buzz.toSprite())
        this.addTag('Seeker')
        this.moveTimer = 60
        this.health = 2
    }

    onPreUpdate(engine) {
        this.move()
    }

    move() {
        let temp = vectorDiff(this.pos, this.scene.PLAYER.pos)

        temp = temp.normalize()
        temp = temp.scale(5)
        this.body.applyImpulse(1, temp)
    }
    
}