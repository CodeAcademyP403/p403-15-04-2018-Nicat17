//Constructor function for student to create
function Student(_stuName, _stuSurname, _stuAge, _stuEmail) {
    var stuName = _stuName;
    var stuSurname = _stuSurname;
    var stuAge = _stuAge;
    var stuEmail = _stuEmail;
    var score= [];

    this.AddScore = function (_score) {
        if (!isNaN(_score) && typeof _score == "number" && _score >= 0 && _score <= 100) {
            score.push(_score);
            return true;
        }
        return false;
    }
    this.GetEmail = function () {
        return stuEmail;
    }
    this.GetName = function () {
        return stuName;
    }
    this.GetSurname = function () {
        return stuSurname;
    }
    this.GetAge = function () {
        return stuAge;
    }
    this.FullName = function () {
        return this.GetName() + " " + this.GetSurname();
    }
    this.ShowScore= function(){
        return score;
    }
}

//Constructor function for group to create
function Group(_name) {
    var name = _name;
    var students = [];

    this.AddStudent = function (_student) {
        var stud = _student;
        if (typeof stud == "object") {
            for (var i = 0; i < students.length; i++) {
                if (students[i].GetEmail() == stud.GetEmail()) {
                    return false;
                }
            }
            students.push(stud);
            return true;
        }
        return false;
    }
    this.DeleteStudent = function (_email) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].GetEmail() == _email) {
                students.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    this.ShowStudent = function () {
        return students;
    }
    this.FindStudent = function (_email) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].GetEmail() == _email) {
                return students[i];
            }
        }
        return false;
    }
}

