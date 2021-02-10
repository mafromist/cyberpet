class Pet {
    constructor (name) {
        this.name = name;
        this.boredness = (Math.floor(Math.random() * 10) * 10);
        this.hunger = (Math.floor(Math.random() * 10) * 10);
        this.thirst = (Math.floor(Math.random() * 10) * 10);
    }
    play() {
        return this.boredness -= 10;
    }
    feed() {
        return this.hunger -= 10;
    }
    giveWater() {
        return this.thirst -= 10;
    }
}
