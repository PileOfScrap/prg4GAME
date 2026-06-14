import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, Scene, Keys, FadeInOut, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { MainScene } from './mainscene.js'
import { GameOver } from './gameover.js'
import { MainMenu } from './mainmenu.js'

export class Game extends Engine {
    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        
        this.high = 0
        
        this.start(ResourceLoader).then(() => this.startGame())
        
    }

    

    startGame() {
        console.log("start de game!")

        this.add('menu', new MainMenu());
        this.add('game', new MainScene());
        this.add('gameover', new GameOver());

        this.goToScene('menu');
        
    }
    
    
    

}

new Game()