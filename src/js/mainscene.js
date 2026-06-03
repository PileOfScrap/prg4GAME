import { Scene, Engine, randomInRange } from 'excalibur'

import { Fih } from './fih.js'


export class mainScene extends Scene {
    constructor() {
        super()
        console.log('level created')
    }

    onPreUpdate(engine) {
        if(randomInRange(0, 20) > 19) {
            let f = new Fih()
            this.add(f)
        }
    }
}