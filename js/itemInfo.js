const baseImageUrl = 'img/items/'
class ItemInfo{
    constructor(name, desc, imageUrl) {
        this.name = name
        this.desc = desc
        this.imageUrl = baseImageUrl + imageUrl
    }

    getImageUrl(){
        return this.imageUrl
    }

    getName(){
        return this.name
    }

    getDesc(){
        return this.desc
    }
}