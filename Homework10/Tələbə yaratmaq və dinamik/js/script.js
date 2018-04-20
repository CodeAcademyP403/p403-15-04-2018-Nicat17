//Get main input 
var form = document.querySelector(".top");
var nameID = document.querySelector("#name");
var surnameID = document.querySelector("#surname");
var ageID = document.querySelector("#age");
var groupID = document.querySelector("#group");

var button = document.querySelector("#button");

//Get for include to table
var tbody = document.querySelector("#tbody");

var arr = [];
var ID = 1;
var score=0;

nameID.focus();

button.addEventListener("click", function (e) {
    e.preventDefault();

    var NameSave=nameID.value;
    var SurnameSave=surnameID.value;
    var AgeSave=Number(ageID.value);
    var GroupSave=groupID.value;
    
    var common = new Student(NameSave,SurnameSave ,AgeSave , GroupSave, ID, score);
    arr.push(common);
    ID++;
    form.reset();
});

function Student(_name, _surname, _age, _group, _ID,_score) {
    //private
    var name = _name;
    var surname = _surname;
    var age = _age;
        age=Number(age);    
    var group = _group;
    var numID = _ID;
    var Score = _score;

    //Method
    this.showName = function () {
        if (name == "") {
            alert("Bos daxil edile bilmez!");
        }
        else if (typeof name ) {
            alert("Name Duzgun melumat daxil edin");
        }
        else {
            return name;
        }
    }
    this.showSurname = function () {
        if (surname == "") {
            alert("Bos daxil edile bilmez!");
        }
        else if (isNaN(surname)==false) {
            alert("Surname  Duzgun melumat daxil edin");
        }
        else {
            return surname;
        }
    }
    this.showAge = function () {
        if (age == "") {
            alert("Bos daxil edile bilmez!");
        }
        else if (isNaN(age)==true){
            alert("Age Duzgun melumat daxil edin");
        }
        else {
            return age;
        }
    }
    this.showGroup = function () {
        if (group == "") {
            alert("Group Bos daxil edile bilmez!");
        }
        else {
            return group;
        }
    }
    this.showID = function () {
        return numID;
    }
    this.showScore = function () {
        return Score;
    }
}


var j = 0;

button.addEventListener("click", function () {

    if (arr[j].showID() != undefined && arr[j].showName() != undefined &&
        arr[j].showSurname() != undefined && arr[j].showAge() != undefined 
        ) {

        var tr = document.createElement("tr");
        tr.classList.add("newtr");
        tbody.appendChild(tr);

        var node1 = document.createTextNode(`${arr[j].showID()}`);
        var node2 = document.createTextNode(`${arr[j].showName()}`);
        var node3 = document.createTextNode(`${arr[j].showSurname()}`);
        var node4 = document.createTextNode(`${arr[j].showAge()}`);
        var node5 = document.createTextNode(`${arr[j].showGroup()}`);
        var node6 = document.createTextNode(`${arr[j].showScore()}`);


        for (var i = 0; i < 6; i++) {

            var td = document.createElement("td");
            td.classList.add(`klas${i + 1}`);
            tr.appendChild(td);
        }

        var temp1 = document.getElementsByClassName("klas1")[j];
        temp1.appendChild(node1);

        var temp2 = document.getElementsByClassName("klas2")[j];
        temp2.appendChild(node2);

        var temp3 = document.getElementsByClassName("klas3")[j];
        temp3.appendChild(node3);

        var temp4 = document.getElementsByClassName("klas4")[j];
        temp4.appendChild(node4);

        var temp5 = document.getElementsByClassName("klas5")[j];
        temp5.appendChild(node5);

        var temp6 = document.getElementsByClassName("klas6")[j];

        tr.addEventListener("click",function(e){
            var check=prompt("Bali daxil edin:");
            check=Number(check);

            if(isNaN(check)==false && check>=0 && check<=100){
                this.children[5].childNodes[0].nodeValue=check;
            }
            else{
                alert("Eded daxil edin!");
            }
        });
        temp6.appendChild(node6);

        j++;
       
    }
});

