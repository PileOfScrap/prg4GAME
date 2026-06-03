export function addAngle(angle, add) {
    this.val = angle + add
    if(this.val > 360) {
        this.val -= 360
    }
    if(this.val < 360) {
        this.val += 360
    }
    return(this.val)
}

export function toXY(speed, angle) {
    
}