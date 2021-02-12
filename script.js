class Pet {
    constructor (name) {
        this.name = name;
        this._happiness = (Math.floor(Math.random() * 10) * 10);
        this._hunger = (Math.floor(Math.random() * 10) * 10);
        this._thirst = (Math.floor(Math.random() * 10) * 10);
    }

    get happiness () {
        return this._happiness
    }

    get hunger () {
        return this._hunger
    }

    get thirst () {
        return this._thirst
    }

    set happiness (happiness) {
        if (happiness <= 0) {
            this._happiness = 0;
        } else if (happiness >= 100) {
            this._happiness = 100;
        } else {
            this._happiness = happiness
        }
    }
    
    set hunger (hunger) {
        if (hunger <= 0) {
            this._hunger = 0;
        } else if (hunger >= 100) {
            this._hunger = 100;
        } else {
            this._hunger = hunger
        }
    }
    set thirst (thirst) {
        if (thirst <= 0) {
            this._thirst = 0;
        } else if (thirst >= 100) {
            this._thirst = 100;
        } else {
            this._thirst = thirst
        }
    }

    play() {
        return this.happiness -= 10;
    }
    feed() {
        return this.hunger -= 10;
    }
    giveWater() {
        return this.thirst -= 10;
    }
}
