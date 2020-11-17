let userName = prompt('Type your name here to receive a special message!');
let specialMessage = confirm('Have a great day with the sweetiest ice cream!');
    
console.log(userName, specialMessage);

function IceCream(iceCreamName, iceCreamPrice){
    iceCreamName  = "EXTREME ICE CREAM"; 
    iceCreamPrice = 3;
   
    return `The name of the ice cream is ${iceCreamName} with a price ${iceCreamPrice} leva.`;
};
console.log(IceCream());

function IceCreamFactory(numberIceCreamPerDay){
    numberIceCreamPerDay = 200;

    return `The factory produces ${numberIceCreamPerDay} pieces of ice cream per day.`;
}
console.log(IceCreamFactory());

var flavours = ['vanilla', 'chocolate', 'strawberry', 'melon'];
var id       = ['a123', 'b234', 'c345', 'd456'];

function ListOFFlavours(vanillaFlavour,chocolateFlavour, strawberryFlavour, melonFlavour){
    vanillaFlavour    ='flavour: ' + flavours[0] + ' id: ' + id[0];
    chocolateFlavour  ='flavour: ' + flavours[1] + ' id: ' + id[1];
    strawberryFlavour ='flavour: ' + flavours[2] + ' id: ' + id[2];
    melonFlavour      ='flavour: ' + flavours[3] + ' id: ' + id[3];

    return `List of flavours:
            ${vanillaFlavour} 
            ${chocolateFlavour}
            ${strawberryFlavour}
            ${melonFlavour}`;   
}
console.log(ListOFFlavours());

var hot = true;

function weather(){
    if(hot){

        return "The weather is hot. The production process continue";

    } else{

        return "The weather is cold. The production process stop";
    }
}
console.log(weather());


