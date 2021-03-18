function Donut(type, glazed, sweetness, hasChocolate) {
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function () {
        console.log("Type: " + this.type);
    };
    this.showSweetness = function () {
        console.log("Sweetness: " + this.sweetness + "/10");
    }
}

var coconutDonut = new Donut("coconut", false, 8, true);
var vanillaDonut = new Donut("vanilla", true, 10, false);
console.log(coconutDonut);
