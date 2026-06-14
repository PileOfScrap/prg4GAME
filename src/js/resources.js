import { range, Sprite, Animation, SpriteSheet, ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe

let playerAnimSpeed = 100
let enemyAnimSpeed = 200

const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Shark: new ImageSource('images/shark.png'),
    Bubble: new ImageSource('images/bubblemed.png'),
    Bubble2: new ImageSource('images/bubblesmall.png'),
    Bone: new ImageSource('images/bones.png'),
    PCdown: new ImageSource('images/frontplayer.png'),
    PlayerCharDown: new ImageSource('images/frontplayer-Sheet-export.png'),
    Fih1 : new ImageSource('images/fih1.png'),
    Dopefih : new ImageSource('images/dopefih1.png'),
    Crab: new ImageSource('images/crab.png'),
    EnemyDownBase: new ImageSource('images/EnemyDown.png'),
    EnemyUpBase: new ImageSource('images/EnemyUp.png'),
    EnemyLeftBase: new ImageSource('images/EnemyLeft.png'),
    EnemyRightBase: new ImageSource('images/EnemyRight.png'),
    Proj: new ImageSource('images/proj.png'),
    Buzz: new ImageSource('images/buzzer.png'),
    Crate: new ImageSource('images/crate.png')
}

const Sheets = {
    PlayerSheetDown: SpriteSheet.fromImageSource({
        image: Resources.PlayerCharDown,
        grid: {
            rows: 1,
            columns: 4,
            spriteWidth: 640,
            spriteHeight: 640
        }
    }),
    EnemyDownSheet: SpriteSheet.fromImageSource({
        image: Resources.EnemyDownBase,
        grid: {
            rows: 1,
            columns: 2,
            spriteWidth: 640,
            spriteHeight: 640
        }
    }),
    EnemyUpSheet: SpriteSheet.fromImageSource({
        image: Resources.EnemyUpBase,
        grid: {
            rows: 1,
            columns: 2,
            spriteWidth: 640,
            spriteHeight: 640
        }
    }),
    EnemyLeftSheet: SpriteSheet.fromImageSource({
        image: Resources.EnemyLeftBase,
        grid: {
            rows: 1,
            columns: 2,
            spriteWidth: 640,
            spriteHeight: 640
        }
    }),
    EnemyRightSheet: SpriteSheet.fromImageSource({
        image: Resources.EnemyRightBase,
        grid: {
            rows: 1,
            columns: 2,
            spriteWidth: 640,
            spriteHeight: 640
        }
    }),
}

const Anims = {
    PlayerDown: Animation.fromSpriteSheet(
        Sheets.PlayerSheetDown,
        range(0, 3), 
        playerAnimSpeed
    ),
    EnemyDown: Animation.fromSpriteSheet(
        Sheets.EnemyDownSheet,
        range(0, 1),
        enemyAnimSpeed
    ),
    EnemyUp: Animation.fromSpriteSheet(
        Sheets.EnemyUpSheet,
        range(0, 1),
        enemyAnimSpeed
    ),
    EnemyRight: Animation.fromSpriteSheet(
        Sheets.EnemyRightSheet,
        range(0, 1),
        enemyAnimSpeed
    ),
    EnemyLeft: Animation.fromSpriteSheet(
        Sheets.EnemyLeftSheet,
        range(0, 1),
        enemyAnimSpeed
    ),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader, Anims }