import { Actor, Engine, Vector } from 'excalibur'
import { Resources } from './resources'

export class Crate extends Actor {
    constructor(spawnerPos, amount) {
        super({
            width: 160,
            height: 160
        })
        this.pos = spawnerPos
        this.graphics.use(Resources.Crate.toSprite())
        this.addTag('AMMOCRATE')
        this.scale = new Vector(0.15, 0.15)
        this.amount = amount
    }
}