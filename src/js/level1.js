import { Scene, Keys } from 'excalibur'
import { Shark } from './shark.js'

export class Level1 extends Scene {

    score

    onInitialize(engine) {
        console.log("this level is created only once.")
        this.score = 0
        const P1 = new Shark(Keys.Up, Keys.Down, Keys.Left, Keys.Right)
        this.add(P1)

        for (let index = 0; index < 2; index++) {
            const fish = new Fish()
            this.add(fish)
            
        }
    }

    onActivate(ctx) {
        console.log("the game has switched to this level. player already exists. reset score to 0")
        this.score = 0
    }

    gameOver() {
        this.engine.goToScene('gameover')
    }
}