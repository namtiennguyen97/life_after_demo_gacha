class Gacha {
    constructor(
        amountSun = 30000,
        items,
        sunConsumed = 0,
        bannerTitle = ''
    ) {
        this.amountSun = amountSun
        this.items = items
        this.sunConsumed = sunConsumed
    }

    getInfoGacha(){
        return {
            sunRemain: this.amountSun,
            items: this.items,
            itemsLength: this.items.length,
            sunConsumed: this.sunConsumed
        }
    }
}