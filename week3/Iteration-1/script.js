var eventList  = [];
var clientsList = [];
id = 0;

function startSystem(){

    closeSystem = false;
    console.log("System is open! Nice job!");

}
startSystem();

function stopSystem(){

    closeSystem = true;
    console.log("System is closed! You cannot create events or clients!");

}

function Event(name, flag = false, price = 0) {

    this.id          = id++;
    this.name        = name;
    this.flag        = flag;
    this.clientsList = []; 
    this.date        = new Date().toDateString();
    this.price       = price;
  
}

//adding events 
var event1  = new Event("Barbie world night", true);
var event2  = new Event("White party", false, 10);
var event3  = new Event("Dj party with Nascosa", false, 10);
var event4  = new Event("Disney party with friends", true, 5);

eventList.push(event1,event2,event3, event4);

function Client(firstName, lastName, gender, age, money = 0) { 
     
    this.firstName = firstName;
    this.lastName  = lastName;
    this.gender    = gender;
    this.age       = age;
    this.money     = money;
}
var client1 = new Client("Maria", "Stancheva", true, 19, 30);
var client2 = new Client("Ivan", "Todorov", false, 18);
var client3 = new Client("Nikolai", "Cvetanov",true, 20, 25);
var client4 = new Client("Veronika", "Lubenova", false, 11, 50);

//listing events
function listEvents(){

    for (let e of eventList) {
        
        if(e.flag == true){
            console.log(`${e.name}: +18; price: ${e.price}; date: ${e.date}`);
        } 
        else{
            console.log(`${e.name}: No age restriction; price: ${e.price}; date: ${e.date}`);
        } 
    }
}
listEvents();

//creating an event
function createEvent(name,flag){

    if(closeSystem == true){
        console.log("System is closed! You cannot create event!");
    }else

        if (name == null) {
            throw new Error("There is no name defined");
        }
        if (flag == true) {
            var event = new Event(name, true);
        }
        else{
            event = new Event(name, false);
        }
        eventList.push(event);

        return event;
}

createEvent("Ladies night with chocolate", true);
console.log("Events after creating new.");
listEvents();


//function for updating an event
function updateEvent(id, name, flag){
   
    let index = eventList.findIndex(event => event.id == id);

    console.log(`Event ${eventList[index].name} was updated`);

    eventList[index].name = name;
    eventList[index].flag = flag;
    return true;
}

//delete event by id
function deleteEvent(id){

    for (let ev of eventList) {

        if (ev.id == id) {
         eventList.splice(eventList.indexOf(ev),1);
         console.log(`Delete event with name ${ev.name}`);   
        }
    }
}
deleteEvent(4);

//adding a client to an event
function addClientToEvent(client, event){
    const MIN_AGE = 18;

    if(closeSystem == true){
        console.log("System is closed! You cannot add a client!");
    } else
     
        if (client.age < MIN_AGE && event.flag == true && client.money >= event.price) {  
            client.money -= event.price; 
            console.log(`The client ${client.firstName} ${client.lastName} was added to ${event.name} and has ${client.money}$ left`);    
           
        }else{
            if (client.money < event.price) {
                console.log(`${client.firstName} ${client.lastName} do not have enough money!`);
                return false;
            }
        }
        if (client.age < MIN_AGE && event.flag == false) {
            console.log("This event is for +18");
        }else
        if (client.age >= MIN_AGE && client.money >= event.price){
            client.money -= event.price; 
            console.log(`The client ${client.firstName} ${client.lastName} was added to ${event.name} and has ${client.money}$ left`);
        }
        
        event.clientsList.push(client);
 
}
 addClientToEvent(client4,event1);
 addClientToEvent(client3,event3);
 addClientToEvent(client2,event2);
 addClientToEvent(client1,event4);
 addClientToEvent(client1,event2);

//getting clients by event and filtering them by gender
function getClientsByEvent(event, filter){
    
    console.log(`Clients in event with name ${event.name} are:`);
        
    for (let clnt of event.clientsList) {
            
        if(filter && clnt.gender == filter){
                
            console.log(`${clnt.firstName} ${clnt.lastName}`);           
        }
    }
}
getClientsByEvent(event3,true);

//removing a client from an existing event
function removeClientFromEvent(client, event){
    
    i=event.clientsList.indexOf(client); 
    
    event.clientsList.splice(i, 1);
    
    console.log(`You have removed ${client.firstName} ${client.lastName} from ${event.name}!`);
}
removeClientFromEvent(client3, event3);

//events without age restriction
function eventsWithoutAgeRestriction(){

    console.log("All events without age restriction are:");

    for(let e of eventList){
        if(e.flag == true){
    
            console.log(`${e.name}`);

        }
    }
}
eventsWithoutAgeRestriction();

//sorting events with signs
function sortEvents(){
    console.log("Sorting events with signs:");

    for(let e of eventList){
        if(e.flag == true){
    
            console.log(`# ${e.name}`);
        }
    }

    for(let e of eventList){
        if(e.flag == false){

            console.log(`* ${e.name}`);
        }
    }
}
sortEvents();

//sort events by flag (6)
function sortEventsByFlag(event,filter){
    console.log("Problem with sorting events by flag!!!(6)");
            
    /*  for (let br of event.listEvents) {
              
          if(filter && br.flag == filter){
          
              console.log(`${br.name}`);
  
          }
      } */
}
sortEventsByFlag();

console.log(eventList);

//(3) bringing out the events with most clients
function mostClientsToEvent(){
   
    var clientNumber = 0;

    for (let ev of eventList) {
        if (ev.clientsList.length == clientNumber) {
           // largestNumberOfPeople = ev.clientsList.length;
            console.log(`There are no people in the event with name: ${ev.name}`);
        }
        if(ev.clientsList.length == clientNumber + 1)
        {
            console.log(`Events with 1 client are: ${ev.name}`);
        }
        if(ev.clientsList.length == clientNumber + 2)
        {
            console.log(`Events with the most clients are: ${ev.name}`);
        }       
    }
}
mostClientsToEvent();

stopSystem();
createEvent("Ladies night with chocolate", true);
addClientToEvent(client4,event1);

startSystem();

//sorting events with signs
function sortEventsByPrice(){
    console.log("Sorting events with signs for price:");

    for(let e of eventList){
        if(e.price == 0){
    
            console.log(`! ${e.name}`);
        }
    }

    for(let e of eventList){
        if(e.price != 0){

            console.log(`$ ${e.name}`);
        }
    }
}
sortEventsByPrice();

