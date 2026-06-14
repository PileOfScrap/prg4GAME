import { Resources } from "./resources.js"
import { ScreenElement, Label, Vector, Graphic, Rectangle, Color } from 'excalibur'

export class UI extends ScreenElement {
    constructor() {
        super()
        
        this.ammoCounter = new Label({
            text: '',
            pos: new Vector(20, 20),
            scale: new Vector(3, 3)
        })

        this.scoreCounter = new Label({
            text: '',
            pos: new Vector(240, 20),
            scale: new Vector(3, 3)
        })

        this.highCounter = new Label({
            text: '',
            pos: new Vector(500, 20),
            scale: new Vector(3, 3)
        })

       this.healthBar = new Rectangle({
            width: 200,
            height: 20,
            pos: new Vector(40, 50)
        });

        this.addChild(this.ammoCounter)
        this.addChild(this.scoreCounter)
        this.addChild(this.highCounter)
        this.graphics.add(this.healthBar)


    }

    onPreUpdate(engine) {
        this.ammoCounter.text = `BULLETS: ${this.scene.PLAYER.ammo}`
        this.scoreCounter.text = `SCORE: ${this.scene.score}`
        this.highCounter.text = `HIGH SCORE: ${this.scene.engine.high}`

        let ratio = this.scene.PLAYER.health / this.scene.PLAYER.maxHealth

        this.healthBar.width = 200 * ratio;
    }

}