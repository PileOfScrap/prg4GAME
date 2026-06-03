import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Shark: new ImageSource('images/shark.png'),
    Bubble: new ImageSource('images/bubblemed.png'),
    Bone: new ImageSource('images/bones.png'),
    PlayerChar: new ImageSource('images/frontplayer.png'),
    Fih1 : new ImageSource('images/fih1.png'),
    Dopefih : new ImageSource('images/dopefih1.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }