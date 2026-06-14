import { Actor, randomInRange, Graphic, randomIntInRange, Engine, Vector, CircleCollider,  CollisionType, BodyComponent, DegreeOfFreedom } from 'excalibur'
import { PC } from './PC.js'
import { toXY, addAngle, vectorDiff, getFacing } from './functions.js'
import { Resources, Anims } from './resources.js'
import { EnemyBase } from './enemy.js'
import { Crate } from './crate.js'

export class Seeker extends EnemyBase {
    constructor(spawnerPos) {
        super(spawnerPos, 120, 100)
        this.graphics.use(Anims.EnemyDown)
        this.addTag('Seeker')
        this.moveTimer = 60
        this.health = 5
    }

    deathEffect() {
        if(Math.random() > 0.6){
            let c = new Crate(this.pos, randomIntInRange(2, 7))
            this.scene.add(c)
        }
    }

    onPreUpdate(engine) {
        this.body.vel.y = this.body.vel.y * 0.98
        this.body.vel.x = this.body.vel.x * 0.98
        this.moveTimer -= 1

        if(this.moveTimer < 0) {
            this.move()
            this.moveTimer = randomIntInRange(50, 170)
        }

        let temp = vectorDiff(this.pos, this.scene.PLAYER.pos)
        temp = getFacing(temp.x, temp.y)
        this.animate(temp)


    }

    animate(facing) {
        switch (facing) { // we love switches
            case "left":
                this.graphics.use(Anims.EnemyLeft)
                break
            case "right":
                this.graphics.use(Anims.EnemyRight)
                break
            case "up":
                this.graphics.use(Anims.EnemyUp)
                break
            case "down":
                this.graphics.use(Anims.EnemyDown)
                break
        }
    }

    move() {
        let temp = vectorDiff(this.pos, this.scene.PLAYER.pos)

        temp = temp.normalize()
        temp = temp.scale(250)
        this.body.applyImpulse(1, temp)
    }
    
}