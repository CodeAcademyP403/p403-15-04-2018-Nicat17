//Get main input 
var form = document.querySelector(".top");

var nameID = document.querySelector("#name");
var surnameID = document.querySelector("#surname");
var ageID = document.querySelector("#age");
var emailID = document.querySelector("#email");

var button = document.querySelector("#button");

//Modal get contact
var ModalCloseInput = document.querySelector("#CloseModal");
var ModalCloseIcon = document.querySelector(".close");
var ModalSaveInput = document.querySelector("#SaveModal");
var ModalValueInput = document.querySelector("#GetValueScore");
var ModalForm=document.querySelector("#ModalForm");

var Modal = document.querySelector(".modal");
//Get table with qs
var tbody = document.querySelector("#tbody");

var selectedStudent;

nameID.focus();

var newGroup = new Group("Any");

button.addEventListener("click", function () {

    var name = nameID.value;
    var surname = surnameID.value;
    var age = parseInt(ageID.value);
    var email = emailID.value;

    form.reset();
    //do control with control func

    //if is correct then add new student
    if (controls(name, surname, age, email)) {
        var stu = new Student(name, surname, age, email);

        var added = newGroup.AddStudent(stu);

        if (added) {
            Update();
        }
        else {
            warning("Bu email artiq istifade olunub");
        }
    }
    // if is incorrect then with warning func answer
    else {
        warning("Melumati duzgun daxil edin");
    }
});

function controls(_name, _surname, _age, _email) {
    if (_name == "" || _surname == "" || _age == "" || isNaN(_age) || _email == "" || _email.search("@")==-1) {
        return false;
    }
    return true;
}

function warning(_info) {

    var info = document.createElement('div');
    info.className = "alert alert-danger";
    info.innerText = _info;
    document.querySelector('.top').appendChild(info);

    setTimeout(function () {
        info.remove();
    }, 3000);
}

function Update() {
    var students = newGroup.ShowStudent();

    tbody.innerHTML = "";

    //loop students array
    for (var stu of students) {
        //create tr tag
        var newTR = document.createElement("tr");

        //create td for Name
        var fname = document.createElement("td");
        fname.innerText = stu.GetName();
        newTR.appendChild(fname);

        //create td for SurName
        var sname = document.createElement("td");
        sname.innerText = stu.GetSurname();
        newTR.appendChild(sname);

        //create td for Name
        var age = document.createElement("td");
        age.innerText = stu.GetAge();
        newTR.appendChild(age);

        //create td for Name
        var email = document.createElement("td");
        email.innerText = stu.GetEmail();
        newTR.appendChild(email);

        //create td for Add student score
        var addScore = document.createElement("td");
        addScore.innerHTML = "<i class='fas fa-plus-circle'></i>";
        newTR.appendChild(addScore);

        //send event to function for add score to student
        addScore.addEventListener("click", function () {
            var email = this.previousElementSibling.innerText;
            selectedStudent = newGroup.FindStudent(email);

            var that = this;
            if (selectedStudent) {

                Open();

                var getFullName = selectedStudent.FullName();

                var fName = Modal.querySelector(".modal-title");

                fName.innerText = getFullName;

                ModalSaveInput.onclick = function () {
                    var ModalValue = parseInt(ModalValueInput.value);

                    var answer = selectedStudent.AddScore(ModalValue);

                    if (!answer) {
                        alert("Duzgun eded daxil edin..");
                        ModalForm.reset();
                    } else {
                        Close();
                        var EndScore = selectedStudent.ShowScore().pop();
                        that.innerHTML = EndScore;
                        ModalForm.reset();
                    }
                }
            }
        });

        //create td for delete student
        var deleteStu = document.createElement("td");
        deleteStu.innerHTML = "<i class='fas fa-times'></i>";
        newTR.appendChild(deleteStu);

        //function for student delete
        deleteStu.addEventListener("click", function () {
            var delEmail = this.previousElementSibling.previousElementSibling.innerText;
            newGroup.DeleteStudent(delEmail);

            Update();
        });
        tbody.appendChild(newTR);
    }
}

ModalCloseInput.addEventListener("click", function () {
    Modal.classList.add("hide");
    Modal.style.display = "none";
});

ModalCloseIcon.addEventListener("click", function () {
    Modal.classList.add("hide");
    Modal.style.display = "none";
});

function Open() {
    Modal.classList.add("show");
    Modal.style.display = "block";
}
function Close() {
    Modal.classList.add("hide");
    Modal.style.display = "none";
}
