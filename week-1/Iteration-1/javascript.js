//създаваме масив от обекти, който ще пази въведените събития
let eventList = [];

//взимаме елементите от HTML, които ще ни трябват
//и ги запазваме в променлива, която ще бъде референция
//към елемента
let action = document.querySelector("#action"); //querySelector в случая взима елемент с id
let eventId = document.querySelector("#event-id");
let eventName = document.querySelector("#event-name");
let nsfwCheck = document.querySelector("#checkbox-nsfw");
let submitBtn = document.querySelector("#submit-button");

//'закачaме' евент който 'слуша' за събитие CLICK върху бутона
//и изпълняваме сътоветната функционалност
submitBtn.addEventListener("click", function (e) {
  try {
    //проверка дали е попълнено име на евента
    //ако не е - 'хвърляме' грешка
    //грешката се улавя в catch() метода и се принтира
    //в конзолата
    if (eventName.value === "") {
      throw new Error("Event name is missing!");
    }

    //ако имаме добавено ID в скритото поле, то значи
    //няма да добавяме нов, а сме в режим на редакция
    //на текущ
    if (eventId.value !== "") {
      eventList.forEach(function (event) {
        if (event.id == eventId.value) {
          event.name = eventName.value;
          event.checkNSFW = nsfwCheck.checked;
        }
      });
    } else {
      //добавяме обект към масива с информация за евента
      eventList.push({
        id: generateID(),
        name: eventName.value,
        checkNSFW: nsfwCheck.checked
      });
    }

    //конструираме списъка с евенти
    buildEventList();
    //връщаме първоначалното състояние на формата
    action.innerText = "Add event";
    eventId.value = "";
    eventName.value = "";
    nsfwCheck.checked = true;
  } catch (ex) {
    console.log(ex);
  }
});

//функция за генериране на уникално ID
//изполваме Date.now() защото това винаги връща
//уникален номер представляващ текущата дата
//при извикване на функцията в милисекунди
function generateID() {
  return Date.now();
}

//фунцкия, която ще конструира списъка със събития
//директно в HTML
function buildEventList() {
  let eventListElement = document.querySelector("#event-list");
  eventListElement.innerHTML = null;

  //итерираме масива с евенти и изпълняваме нужната логика
  //за всеки елемент
  eventList.forEach(function (event) {
    //създаваме нов елемент от тип <li>
    let item = document.createElement("li");
    //добавяме клас за да стилизираме със CSS
    item.classList.add("list-item");
    //създаваме скрит елемент, който ще пази ID
    let itemId = document.createElement("input");
    itemId.type = "hidden";
    itemId.id = "event-id";
    itemId.value = event.id;
    //създаваме обект <span> с името на евента
    let itemName = document.createElement("span");
    itemName.innerText = "Sample event: " + event.name;
    //създаваме обект <span> за NSFW
    let itemNSFW = document.createElement("span");
    itemNSFW.innerText = event.checkNSFW ? ": 18+" : "";

    //създаваме бутони за редакция/изтриване
    let btnEdit = document.createElement("button");
    btnEdit.classList.add("button-list");
    btnEdit.innerText = "Edit";
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("button-list");
    btnDelete.innerText = "Delete";

    //'закачаме' събитие на бутона за редакция
    btnEdit.addEventListener("click", function (e) {
      //добавяме стойностите на събитието, което ще манипулираме
      //към формата за добавяне/редакция
      action.innerText = "Edit: " + event.name;
      eventId.value = event.id;
      eventName.value = event.name;
      nsfwCheck.checked = event.checkNSFW;
    });

    //'закачаме' събитие на бутона за изтриване
    //на евент от списъка, по ID
    btnDelete.addEventListener("click", function (e) {
      //запазваме елементите, които нямат това ID
      //в нов масив
      let newEventList = eventList.filter(function (ev) {
        return ev.id !== event.id;
      });

      //присвояваме новите елементи към основния списък
      //които вече нямат изтрития елемент
      eventList = newEventList;
      //построяваме списъка отново
      //за да покажем промяната на екрана
      buildEventList();
    });

    //добавяме създадените HTML елементи в основния
    //в реда, в който искаме да се визуализират на страницата
    item.appendChild(itemId);
    item.appendChild(itemName);
    item.appendChild(itemNSFW);
    item.appendChild(btnEdit);
    item.appendChild(btnDelete);

    //добавяме пълния елемент с информация за евента
    //към HTML списъка
    eventListElement.appendChild(item);
  });
}
