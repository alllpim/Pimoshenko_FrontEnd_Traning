class Product {
    constructor(price, ccal) {
        this.price = price;
        this.ccal = ccal;
    }
    get getPrice() {
        return this.price;
    }
    get getCcal() {
        return this.ccal;
    }
}

class Base extends Product {
    constructor(name, price, ccal) {
        super(price, ccal);
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}

class Sause extends Product {
    constructor(name, price, ccal) {
        super(price, ccal);
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}

class Ingridients extends Product {
    constructor(name, price, ccal) {
        super(price, ccal);
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}

//Приправа
class Seasoning extends Product {
    constructor(name, price, ccal) {
        super(price, ccal);
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}

class Pizza {
    constructor(Base, Sause, Ingridients, Seasoning) {
        this.Base = Base;
        this.Sause = Sause;
        this.Ingridients = Ingridients;
        this.Seasoning = Seasoning;
    }
    showComponents() {
        return this.Base.getName + " " + this.Sause.getName + " " + this.Ingridients.getName + " " + this.Seasoning.getName;
    }
    showPrice() {
        return this.Base.getPrice + this.Sause.getPrice + this.Ingridients.getPrice + this.Seasoning.getPrice;
    }
    showCcal() {
        return this.Base.getCcal + this.Sause.getCcal + this.Ingridients.getCcal + this.Seasoning.getCcal;
    }
}

var base = new Base("Толстое", 5, 120);
var sause = new Sause("Сырный", 2, 250);
var ingridients = new Ingridients("Ветчина, грибы, сыр", 5, 456);
var seasoning = new Seasoning("Орегано", 0.5, 12);


var pizza = new Pizza(base, sause, ingridients, seasoning);
alert("Pizza components: " + pizza.showComponents());
alert("Price: " + pizza.showPrice());
alert("Ccal: " + pizza.showCcal());