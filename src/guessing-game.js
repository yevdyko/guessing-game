class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        let median = Math.floor((this.min + this.max) / 2);
        return median;
    }

    lower() {
        this.max = this.guess();    
    }

    greater() {
        this.min = this.guess();
    }
}

module.exports = GuessingGame;
