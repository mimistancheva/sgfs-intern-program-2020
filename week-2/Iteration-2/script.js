let eventList  = [];
let clientList = [];
id = 0;

function Event(id, name, flag) {

    this.id   = id;
    this.name = name;
    this.flag = flag;
}
//create event
function createEvent(name, flag) { 

    if (!name) {
        throw new Error(" Error : There is no name of the event! ");
    }

    var event;

    event = new Event(id, name, flag);
    eventList.push(event);
    id++;
    return event;
}

event1 = createEvent("Dj party with Nascosa", 21);
event2 = createEvent("Ladies night with chocolate", 13);
event3 = createEvent("Disney party with friends", 15);
event4 = createEvent("White party", 22);

console.log(eventList);

//delete event by id
function deleteEventById(id) {
    for (let ev of eventList) {
        if (ev.id == id) {
            eventList.splice(eventList.indexOf(ev), 1);
            console.log("delete event: ", eventToDelete.name);
        }
    }
}

function Client(eventId, firstName, lastName, gender, age) { 
    this.eventId   = eventId; 
    this.firstName = firstName;
    this.lastName  = lastName;
    this.gender    = gender;
    this.age       = age;
}

//add client
function addClient(eventId, firstName, lastName, gender, age) {

    if (!firstName) {
        throw new Error(" Error : First name miss! ");
    }
    if (!lastName) {
        throw new Error(" Error : Last name miss! ");
    }

    var client;

    client = new Client(eventId, firstName, lastName, gender, age);

    clientList.push(client);
}

client1 = addClient(eventList[0].id, "Maria", "Stancheva", "female", 20);
client2 = addClient(eventList[1].id, "Ivan", "Todorov", "male", 25);
client3 = addClient(eventList[2].id, "Nikolai", "Cvetanov", "male", 15);
client4 = addClient(eventList[3].id, "Veronika", "Lubenova", "female", 21);

console.log(clientList);

//filter clients by gender
function getClientsByEvent(event, filter){
    
    console.log(`Clients in this ${event.name} event are:`)
        
        for (let male of event.clients) {
            
            if(filter && male.gender == filter){
                
                console.log(`We have ${male.clientName}`);

            }

        }
}

//add client to event
(function addClientToEvent() {
    
    eventList.forEach(event => {
        var filteredClients = clientList.filter(client => client.eventId === event.id);

        if (filteredClients.length !== 0) {
            event.clients = filteredClients; 
        }

    });

})(); 
console.log('Events with Clients: ', eventList);

