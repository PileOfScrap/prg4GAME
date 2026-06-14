// code for playe chrarcter
import { Actor, Keys, Vector, randomInRange, Flash, CollisionType } from 'excalibur'
import { Resources, Anims } from './resources.js'
import { Bubble } from './bubble.js'
import { Bullet } from './bullet.js'
import { vectorDiff } from './functions.js'

export class PC extends Actor {
    health = 5
    score = 0
    juice = 30.0
    maxJuice = 30
    juiceRate = 0.5
    speed = 3
    constructor() {
        super({width: 500, height: 500})
        this.pos = new Vector(randomInRange(10, 700), randomInRange(10, 300))
        this.graphics.use(Resources.PCdown.toSprite()) 
        this.scale = new Vector (0.15, 0.15)
        this.dir = 0
        this.addTag('PLAYERCHARACTER')
        this.body.collisionType = CollisionType.Active
        this.ammo = 40

        this.maxHealth = 5


        this.on('collisionstart', (e) => {
            let target = e.other.owner
            if (target && target.hasTag('ENEMY') ) {
                
                this.takeDamage(1)
                target.dodge(300)

                let temp = vectorDiff(target.pos, this.pos)
                
                temp = temp.normalize()
                temp = temp.scale(20)
                this.pos.x = this.pos.x + temp.x
                this.pos.y = this.pos.y + temp.y

            }
            if(target && target.hasTag('AMMOCRATE')) {

                this.ammo += target.amount

                target.kill()

            }

        })

    }

    onInitialize(engine) {
        this.kd = engine.input.keyboard
    }

    onPreUpdate(engine) {
        this.move()
        this.breathe()

        if(this.kd.wasPressed(Keys.Space)) {
            this.shoot()
            console.log('shooted')
        }

        
    }

    // custom shi

    breathe() {
        if(Math.random() > 0.98) {
                let variance = 35
                let b = new Bubble(new Vector(randomInRange(this.pos.x + variance, this.pos.x - variance), randomInRange(this.pos.y + variance, this.pos.y - variance)), 0)
                this.scene.add(b)
            }
    }

    shoot() {
        if(this.ammo > 0) {
            let b = new Bullet(this.pos, this.dir)
            this.scene.add(b)    
            this.ammo -= 1 
        }
    }
            
    move() {
        this.speedx = 0
        this.speedy = 0
        this.anim = false

        if (this.kd.isHeld(Keys.W)) {
            this.speedy -= this.speed
            this.anim = true
            this.dir = 180
        }
        if (this.kd.isHeld(Keys.S)) {
            this.speedy += this.speed
            this.anim = true
            this.dir = 0
        }
        if (this.kd.isHeld(Keys.A)) {
            this.speedx -= this.speed
            this.anim = true
            this.dir = 270
        }
        if (this.kd.isHeld(Keys.D)) {
            this.speedx += this.speed
            this.anim = true
            this.dir = 90
        }

        if(this.anim) {
            this.graphics.use(Anims.PlayerDown) 
        } else {
            this.graphics.use(Resources.PCdown.toSprite()) 
        }

        this.pos.x = this.pos.x + this.speedx
        this.pos.y = this.pos.y + this.speedy


    }

    takeDamage(amount) {
        this.actions.flash()
        this.health -= amount

        if (this.health <= 0) {
            this.scene.engine.goToScene('gameover');
        }

    }

}