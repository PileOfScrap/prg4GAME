import '../css/style.css';
import { Actor, Engine, Vector, DisplayMode, Scene, Keys, FadeInOut, Color } from "excalibur";
import { Resources, ResourceLoader } from './resources.js';
import { Fish } from './fish.js';
import { Shark } from './shark.js'
import { Level1 } from './level1.js'
import { mainScene } from './mainscene.js'

export class Game extends Engine {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
        
    }

    

    startGame() {
        console.log("start de game!")
        
        let transitions = {
            in: new FadeInOut({ duration: 400, direction: 'in', color: Color.Black }),
            out: new FadeInOut({ duration: 400, direction: 'out', color: Color.Black })
        }
        this.add('level', { scene: new mainScene(), transitions })
        this.goToScene('level') 
        
    }
    
    
    

}

new Game()