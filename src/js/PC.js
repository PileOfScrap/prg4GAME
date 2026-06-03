// code for playe chrarcter
import { Actor, Keys, Vector } from 'excalibur'
import { Resources } from './resources.js'

export class PC extends Actor {
    health = 3
    score = 0
    juice = 30.0
    maxJuice = 30
    juiceRate = 0.5
    speed = 20
    constructor() {
        super({width: 100, height: 100})
        this.pos = new Vector(randomInRange(10, 700), randomInRange(10, 300))
        this.graphics.use(Resources.PlayerChar.toSprite()) 

    }

    onPreUpdate(engine) {
        this.move()
        this.juiceRegen()
    }

    move() {
        this.speedx = 0
        this.speedy = 0

        if (this.kd.isHeld(Keys.W)) {
            this.speedy -= this.speed
        }
        if (this.kd.isHeld(Keys.S)) {
            this.speedy += this.speed
        }
        if (this.kd.isHeld(Keys.A)) {
            this.speedx -= this.speed
        }
        if (this.kd.isHeld(Keys.D)) {
            this.speedx += this.speed
        }

        this.pos.x = this.pos.x + this.speedx
        this.pos.y = this.pos.y + this.speedy

        if(this.kd.wasPressed(Keys.Space)) {
            this.shoot()
            console.log('shooted')
        }
    }

    juiceRegen() {
        this.juice = this.juice + this.juiceRate
        if(this.juice > this.maxJuice) {
            this.juice = this.maxJuice
        }
    }

}