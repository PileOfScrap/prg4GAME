import { Scene, ScreenElement, Label, Vector, Font, FontUnit, Color } from 'excalibur';

export class MainMenu extends Scene {

    onInitialize(engine) {
        const title = new Label({
            text: 'AQUANAUT',
            pos: new Vector(300, 150),
        })

        const highScore = new Label({
            text: `High Score: ${this.engine.high}`,
            pos: new Vector(300, 220),
        })

        const startButton = new Label({
            text: '[ CLICK TO START ]',
            pos: new Vector(300, 300),
        })

        startButton.on('pointerup', () => {
            engine.goToScene('game');
        })

        const ui = new ScreenElement();
        ui.addChild(title);
        ui.addChild(highScore);
        ui.addChild(startButton);

        this.add(ui);
    }
}