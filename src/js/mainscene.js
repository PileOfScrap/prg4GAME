import { Scene, Engine, randomInRange, Vector } from 'excalibur'
import { PC } from './PC.js'
import { Fih } from './fih.js'
import { Seeker } from './seeker.js'
import { Sprinter } from './sprinter.js'
import { Crate } from './crate.js'
import { UI } from './hud.js'


export class MainScene extends Scene {
    constructor() {
        super()
        console.log('level created')
        this.f = new Fih()
        this.PLAYER
        this.enemyTimer = 700
        this.score = 0
    }

    addFish() {
        let f = new Fih()
        this.add(f)
    }

    addScore(amount) {
        this.score += amount
        if(this.score > this.engine.high) {
            this.engine.high = this.score
        }
    }
    
    onInitialize(engine) {
        for (let index = 0; index < 13; index++) {
            this.addFish()            
        }

        let PLAYER = new PC()
        this.add(PLAYER)
        this.PLAYER = PLAYER
        this.camera.strategy.elasticToActor(PLAYER, 0.01, 0.05)

        let hud = new UI()
        this.add(hud)
    }

    onPreUpdate(engine) {
        this.enemyTimer -= 1
        if(this.enemyTimer < 0) {
            let pos = this.getOffscreenPosition(engine)
            let enemy = new Seeker(pos)
            this.add(enemy)

            let sprint = new Sprinter(pos)
            this.add(sprint)
            
            let crate = new Crate(pos, 10)
            this.add(crate)


            this.enemyTimer = 700
        }
    }

    getOffscreenPosition(engine) {
        let cam = engine.currentScene.camera
        let view = cam.viewport

        let padding = 50 // how far outside screen

        let left = cam.pos.x - view.width / 2 - padding
        let right = cam.pos.x + view.width / 2 + padding
        let top = cam.pos.y - view.height / 2 - padding
        let bottom = cam.pos.y + view.height / 2 + padding

        const side = Math.floor(Math.random() * 4)

        switch (side) {
            case 0: return new Vector(left, randomInRange(top, bottom))   // left
            case 1: return new Vector(right, randomInRange(top, bottom))  // right
            case 2: return new Vector(randomInRange(left, right), top)    // top
            default: return new Vector(randomInRange(left, right), bottom)// bottom
        }
    }
}