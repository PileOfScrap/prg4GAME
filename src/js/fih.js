import { Resources } from './resources.js'
import { Actor, Vector, Engine, randomInRange, Graphic, Util } from 'excalibur'

export class Fih extends Actor {

    moveDir

    

    constructor() {
        super({
            width: 50.,
            height: 50
        })
        this.rand = Math.random()
        console.log(this.rand)

        if(this.rand > 0.4) {
            this.graphics.use(Resources.Fih1.toSprite())
        } else {
            this.graphics.use(Resources.Dopefih.toSprite())
        } 

        this.scale = new Vector (0.2, 0.2)
        
        this.pos = new Vector(randomInRange(0, 500), randomInRange(0, 500))

        this.events.on("exitviewport", (e) => this.kill())

        this.moveDir = randomInRange(0, 360);
        this.targetDir = this.moveDir;
        this.speed = 50; // tweak as needed

    }

    onPreUpdate(engine) {
        
    }


}