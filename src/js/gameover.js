import { Scene, ScreenElement, Label, Vector, Font, FontUnit, Color } from 'excalibur'

export class GameOver extends Scene {

    onInitialize(engine) {

        const text = new Label({
            text: 'GAME OVER',
            pos: new Vector(300, 150),
            font: new Font({ size: 48, unit: FontUnit.Px, color: Color.Red })
        })

        const score = new Label({
            text: `High Score: ${this.engine.high}`,
            pos: new Vector(300, 220),
            font: new Font({ size: 24, unit: FontUnit.Px, color: Color.White })
        })

        const button = new Label({
            text: '[ BACK TO MENU ]',
            pos: new Vector(300, 300),
            font: new Font({ size: 28, unit: FontUnit.Px, color: Color.Yellow })
        })

        button.on('pointerup', () => {
            engine.goToScene('menu')
        })

        const ui = new ScreenElement()
        ui.addChild(text)
        ui.addChild(score)
        ui.addChild(button)

        this.add(ui)
    }
}