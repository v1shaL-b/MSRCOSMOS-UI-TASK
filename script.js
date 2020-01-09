$(document).ready(function(){
    $("#register_here").click(function(){

        $("#div_login").hide();
        $("#div_register").show();

    });
    
    $("#login_here").click(function(){

        $("#div_register").hide();
        $("#div_login").show();

    });


    $("#userEmail").on("keyup", function () {
        if ($.trim($("#userEmail").val()) == "") {
            $("#userEmail").css("border-color", "red");
            $("#userEmail_error").text("Please Enter Email !");
            return false
        } else if (reg.test($("#userEmail").val()) == false) {
            $("#userEmail").css("border-color", "red");
            $("#userEmail_error").text("Invalid Email Address !");
            return false;
        } else {
            $("#userEmail").css("border-color", "green");
            $("#userEmail_error").text('');
            return true;
        }
    });

    $("#userPassword").on("keyup", function(){
        if ($.trim($("#userPassword").val()) == "") {
            $("#userPassword").css("border-color", "red");
            $("#userPassword_error").text("Please Enter Password !");
            return false;
        } else if ($.trim($('#userPassword').val()).length < 6 || $.trim($('#userPassword').val()).length > 20) {
            $("#userPassword").css("border-color", "red");
            $("#userPassword_error").text("Password length must be 6 to 20 charcter !");
            return false;
        } else {
            $("#userPassword").css("border-color", "green");
            $("#userPassword_error").text("");
            return true;
        }
    });

    $("#fname").on("keyup", function () {
        if ($.trim($("#fname").val()) == "") {
            $("#fname").css("border-color", "red");
            $("#fname_error").text("First Name Required !");
            return false;
        } else if ($(this).val().match('^[a-zA-Z]{2,20}$')) {
            $("#fname").css("border-color", "green");
            $("#fname_error").text("");
            return true;
        } else {
            $("#fname").css("border-color", "red");
            $("#fname_error").text("Allow only Alphabets !");
            return false;
        }
    });

    $("#mname").on("keyup", function () {
        if ($(this).val().match('^[a-zA-Z]{2,20}$')) {
            $("#mname").css("border-color", "green");
            $("#mname_error").text("");
            return true;
        } else {
            $("#mname").css("border-color", "red");
            $("#mname_error").text("Allow only Alphabets !");
            return false;
        }
    });

    $("#lname").on("keyup", function () {
        if ($.trim($("#lname").val()) == "") {
            $("#lname").css("border-color", "red");
            $("#lname_error").text("Last Name Required !");
            return false;
        } else if ($(this).val().match('^[a-zA-Z]{2,20}$')) {
            $("#lname").css("border-color", "green");
            $("#lname_error").text("");
            return true;
        } else {
            $("#lname").css("border-color", "red");
            $("#lname_error").text("Allow only Alphabets !");
            return false;
        }
    });

    $("#email").on("keyup", function () {
        if ($.trim($("#email").val()) == "") {
            $("#email").css("border-color", "red");
            $("#email_error").text("Please Enter Email !");
            return false
        } else if (reg.test($("#email").val()) == false) {
            $("#email").css("border-color", "red");
            $("#email_error").text("Invalid Email Address !");
            return false;
        } else {
            $("#email").css("border-color", "green");
            $("#email_error").text('');
            return true;
        }
    });

    $("#mobile").on("keyup", function () {
        if ($.trim($('#mobile').val()).length != 10) {
            $("#mobile").css("border-color", "red");
            $("#mobile_error").text("Mobile no length must be 10 digit !");
            return false;
        }else {
            $("#mobile").css("border-color", "green");
            $("#mobile_error").text("");
            return true;
        }
    });

    $("#password").on("keyup", function () {
        if ($.trim($("#password").val()) == "") {
            $("#password").css("border-color", "red");
            $("#password_error").text("Please Enter Password !");
            return false;
        } else if ($.trim($('#password').val()).length < 6 || $.trim($('#password').val()).length > 20) {
            $("#password").css("border-color", "red");
            $("#password_error").text("Length must be 6 to 20 charcter !");
            return false;
        } else {
            $("#password").css("border-color", "green");
            $("#password_error").text("");
            return true;
        }
    });

    $("#confirm_password").on("keyup", function () {
        if ($.trim($("#confirm_password").val()) == "") {
            $("#confirm_password").css("border-color", "red");
            $("#confirm_password_error").text("Please Enter Password !");
            return false;
        } else if ($.trim($('#confirm_password').val()).length < 6 || $.trim($('#confirm_password').val()).length > 20) {
            $("#confirm_password").css("border-color", "red");
            $("#confirm_password_error").text("Length must be 6 to 20 charcter !");
            return false;
        } else if ($("#password").val() != $("#confirm_password").val()){
            $("#confirm_password").css("border-color", "red");
            $("#password").css("border-color", "red");
            $("#confirm_password_error").text("Password do not match !");
            return false;
        } else {
            $("#password").css("border-color", "green");
            $("#confirm_password").css("border-color", "green");
            $("#confirm_password_error").text("");
            return true;
        }
    });

    $("#register").click(function(){
        if ($.trim($("#fname").val()) == "") {
            $("#fname").css("border-color", "red");
            $("#fname_error").text("First Name Required !");
            return false;
        } else if ($.trim($("#lname").val()) == "") {
            $("#lname").css("border-color", "red");
            $("#lname_error").text("Last Name Required !");
            return false;
        } else if ($.trim($("#email").val()) == "") {
            $("#email").css("border-color", "red");
            $("#email_error").text("Please Enter Email !");
            return false;
        } else if (reg.test($("#email").val()) == false) {
            $("#email").css("border-color", "red");
            $("#email_error").text("Invalid Email Address !");
            return false;
        } else if ($.trim($("#password").val()) == "") {
            $("#password").css("border-color", "red");
            $("#password_error").text("Please Enter Password !");
            return false;
        } else if ($.trim($('#password').val()).length < 6 || $.trim($('#password').val()).length > 20) {
            $("#password").css("border-color", "red");
            $("#password_error").text("Length must be 6 to 20 charcter !");
            return false;
        } else if ($.trim($("#confirm_password").val()) == "") {
            $("#confirm_password").css("border-color", "red");
            $("#confirm_password_error").text("Please Enter Password !");
            return false;
        } else if ($.trim($('#confirm_password').val()).length < 6 || $.trim($('#confirm_password').val()).length > 20) {
            $("#confirm_password").css("border-color", "red");
            $("#confirm_password_error").text("Length must be 6 to 20 charcter !");
            return false;
        } else if ($("#password").val() != $("#confirm_password").val()) {
            $("#confirm_password").css("border-color", "red");
            $("#password").css("border-color", "red");
            $("#confirm_password_error").text("Password do not match !");
            return false;
        }
        else{
            alert("Registration Successful...");
            window.location = "index.html";
            resetRegisterForm();
        }
    });

    $("#sid").on("keyup", function () {
        if ($.trim($("#sid").val()) == "") {
            $("#sid").css("border-color", "red");
            $("#sid_error").text("Student ID Required !");
            return false;
        } else if ($.trim($('#sid').val()).length < 2 || $.trim($('#sid').val()).length > 30) {
            $("#sid").css("border-color", "red");
            $("#sid_error").text("Student ID must be 2 to 30 Charcter !");
            return false;
        } else if ($(this).val().match('^[a-zA-Z0-9]*$')) {
            $("#sid").css("border-color", "green");
            $("#sid_error").text("");
            return true;
        } else {
            $("#sid").css("border-color", "red");
            $("#sid_error").text("Allow only Alphabets and Numbers !");
            return false;
        }
    });

    $("#sName").on("keyup", function () {
        if ($.trim($("#sName").val()) == "") {
            $("#sName").css("border-color", "red");
            $("#sName_error").text("Student Name Required !");
            return false;
        } else if (sname.test($("#sName").val()) == true) {
            $("#sName").css("border-color", "green");
            $("#sName_error").text("");
            return true;
        } else {
            $("#sName").css("border-color", "red");
            $("#sName_error").text("Allow only Alphabets and Spaces !");
            return false;
        }
    });

    $("#sEmail").on("keyup", function () {
        if ($.trim($("#sEmail").val()) == "") {
            $("#sEmail").css("border-color", "red");
            $("#sEmail_error").text("Please Enter Email !");
            return false
        } else if (reg.test($("#sEmail").val()) == false) {
            $("#sEmail").css("border-color", "red");
            $("#sEmail_error").text("Invalid Email Address !");
            return false;
        } else {
            $("#sEmail").css("border-color", "green");
            $("#sEmail_error").text('');
            return true;
        }
    });


    $("#sClass").on("keyup", function () {
        if ($.trim($("#sClass").val()) == "") {
            $("#sClass").css("border-color", "red");
            $("#sClass_error").text("Student Class Required !");
            return false;
        } else if ($.trim($('#sClass').val()).length < 2 || $.trim($('#sClass').val()).length > 30) {
            $("#sClass").css("border-color", "red");
            $("#sClass_error").text("Student Class must be 2 to 30 Character !");
            return false;
        } else if ($("#sClass").val().match('^[a-zA-Z0-9]*$')) {
            $("#sClass").css("border-color", "green");
            $("#sClass_error").text("");
            return true;
        } else {
            $("#sClass").css("border-color", "red");
            $("#sClass_error").text("Allow only Alphabets and Numbers !");
            return false;
        }
    });

    $("#eYear").on("keyup", function () {
        if ($.trim($("#eYear").val()) == "") {
            $("#eYear").css("border-color", "red");
            $("#eYear_error").text("Enrollment year Required !");
            return false;
        } else if ($.trim($('#eYear').val()).length != 4) {
            $("#eYear").css("border-color", "red");
            $("#eYear_error").text("Enrollment year must be 4 digit !");
            return false;
        } else {
            $("#eYear").css("border-color", "green");
            $("#eYear_error").text("");
            return true;
        }
    });

    $("#sCity").on("keyup", function () {
        if ($.trim($("#sCity").val()) == "") {
            $("#sCity").css("border-color", "red");
            $("#sCcity_error").text("City Name Required !");
            return false;
        } else if (sname.test($("#sCity").val()) == true) {
            $("#sCity").css("border-color", "green");
            $("#sCcity_error").text("");
            return true;
        } else {
            $("#sCity").css("border-color", "red");
            $("#sCcity_error").text("Allow only Alphabets and Spaces !");
            return false;
        }
    });

    $("#sCountry").focusout(function () {
        if ($("#sCountry").val() == "") {
            $("#sCountry").css("border-color", "red");
            $("#sCountry_error").text("Select Country");
            return false;
        } else {
            $("#sCountry").css("border-color", "green");
            $("#sCountry_error").text("");
            return true;
        }
    });

    $("#save").click(function () {
        if ($.trim($("#sid").val()) == "") {
            $("#sid").css("border-color", "red");
            $("#sid_error").text("Student ID Required !");
            return false;
        } else if ($.trim($('#sid').val()).length < 2 || $.trim($('#sid').val()).length > 30) {
            $("#sid").css("border-color", "red");
            $("#sid_error").text("Student ID must be 2 to 30 Charcter !");
            return false;
        } else if (sid.test($("#sid").val()) == false) {
            $("#sid").css("border-color", "red");
            $("#sid_error").text("");
            return false;
        } else if ($.trim($("#sName").val()) == "") {
            $("#sName").css("border-color", "red");
            $("#sName_error").text("Student Name Required !");
            return false;
        } else if (sname.test($("#sName").val()) == false) {
            $("#sName").css("border-color", "red");
            $("#sName_error").text("");
            return false;
        } else if ($.trim($("#sEmail").val()) == "") {
            $("#sEmail").css("border-color", "red");
            $("#sEmail_error").text("Please Enter Email !");
            return false;
        } else if (reg.test($("#sEmail").val()) == false) {
            $("#sEmail").css("border-color", "red");
            $("#sEmail_error").text("Invalid Email Address !");
            return false;
        } else if ($.trim($("#sClass").val()) == "") {
            $("#sClass").css("border-color", "red");
            $("#sClass_error").text("Student Class Required !");
            return false;
        } else if ($.trim($('#sClass').val()).length < 2 || $.trim($('#sClass').val()).length > 30) {
            $("#sClass").css("border-color", "red");
            $("#sClass_error").text("Student Class must be 2 to 30 Character !");
            return false;
        } else if (sid.test($("#sClass").val()) == false) {
            $("#sClass").css("border-color", "red");
            $("#sClass_error").text("");
            return false;
        } else if ($.trim($("#eYear").val()) == "") {
            $("#eYear").css("border-color", "red");
            $("#eYear_error").text("Enrollment year Required !");
            return false;
        } else if ($.trim($('#eYear').val()).length != 4) {
            $("#eYear").css("border-color", "red");
            $("#eYear_error").text("Enrollment year must be 4 digit !");
            return false;
        } else if ($.trim($("#sCity").val()) == "") {
            $("#sCity").css("border-color", "red");
            $("#sCcity_error").text("City Name Required !");
            return false;
        } else if (sname.test($("#sCity").val()) == false) {
            $("#sCity").css("border-color", "red");
            $("#sCcity_error").text("");
            return false;
        } else if ($("#sCountry").val() == "") {
            $("#sCountry").css("border-color", "red");
            $("#sCountry_error").text("Select Country");
            return false;
        } else {
            onFormSubmit();
            alert("Student data save successfully...");
            resetForm();
            return true;
        }
    });

});


function validateForm() {
    var username = $("#userEmail").val();
    var password = $("#userPassword").val();
    if (username == null || username == "") {
        $("#userEmail").css("border-color", "red");
        $("#userEmail_error").text("Please Enter Email !!!");
        return false;
    }
    else if (password == null || password == "") {
        $("#userPassword").css("border-color", "red");
        $("#userPassword_error").text("Please Enter password !!!");
        return false;
    }
    else if ((username == "user@gmail.com") && (password == "123456")) {
        alert("Login Successful...");
        window.location = "dashboard.html";
        resetLoginForm();
    }
    else {
        alert("Access denied ! Valid username and password is required !!!");
        return false;
    }
}

var sid = /^[a-zA-Z0-9]*$/ ;
var sname = /^[a-zA-Z\s]+$/ ;

var reg = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/;

function validateEmail(emailField) {
    if (reg.test(emailField.value) == false) {
        $("#userEmail_error").text('Invalid Email Address');
        return false;
    }else{
        $("#userEmail_error").text('');
        return true;
    }
}

function validEmail(emailField) {
    if (reg.test(emailField.value) == false) {
        $("#email_error").text('Invalid Email Address');
        return false;
    } else {
        $("#email_error").text('');
        return true;
    }
}

var selectedRow = null;
function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
        insertFormData(formData);
    }else{
        updateData(formData);
        resetForm();
    }
}

function readFormData(){
    var formData = {};
    formData["sid"] = document.getElementById("sid").value;
    formData["sName"] = document.getElementById("sName").value;
    formData["sEmail"] = document.getElementById("sEmail").value;
    formData["sClass"] = document.getElementById("sClass").value;
    formData["eYear"] = document.getElementById("eYear").value;
    formData["sCity"] = document.getElementById("sCity").value;
    formData["sCountry"] = document.getElementById("sCountry").value;
    return formData;
}

function insertFormData(data){
    var table = document.getElementById("empList").getElementsByTagName("tbody")[0];
    var newrow = table.insertRow(table.length);
    
    cell1 = newrow.insertCell(0);
    cell1.innerHTML = data.sid;

    cell2 = newrow.insertCell(1);
    cell2.innerHTML = data.sName;

    cell3 = newrow.insertCell(2);
    cell3.innerHTML = data.sEmail;

    cell4 = newrow.insertCell(3);
    cell4.innerHTML = data.sClass;

    cell5 = newrow.insertCell(4);
    cell5.innerHTML = data.eYear;

    cell6 = newrow.insertCell(5);
    cell6.innerHTML = data.sCity;

    cell7 = newrow.insertCell(6);
    cell7.innerHTML = data.sCountry;

    cell8 = newrow.insertCell(7);
    cell8.innerHTML = `<a onClick="onEdit(this);" class="btn btn-primary btn-sm" style="color:#fff">Edit&nbsp;<i class="fas fa-pen-fancy"></i></a>
                        <a onCLick="onDelete(this);" class="btn btn-warning btn-sm">Delete&nbsp;<i class="far fa-trash-alt"></i></a>`;

    resetForm();
}

function resetRegisterForm(){
    document.getElementById("fname").value = "";
    document.getElementById("mname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirm_password").value = "";
}
function resetLoginForm(){
    document.getElementById("userEmail").value = "";
    document.getElementById("userPassword").value = "";
}
function resetForm(){
    document.getElementById("sid").value = "";
    document.getElementById("sName").value = "";
    document.getElementById("sEmail").value = "";
    document.getElementById("sClass").value = "";
    document.getElementById("eYear").value = "";
    document.getElementById("sCity").value = "";
    document.getElementById("sCountry").value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("sEmail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sClass").value = selectedRow.cells[3].innerHTML;
    document.getElementById("eYear").value = selectedRow.cells[4].innerHTML;
    document.getElementById("sCity").value = selectedRow.cells[5].innerHTML;
    document.getElementById("sCountry").value = selectedRow.cells[6].innerHTML;
}

function updateData(formData){
    selectedRow.cells[0].innerHTML = formData.sid;
    selectedRow.cells[1].innerHTML = formData.sName;
    selectedRow.cells[2].innerHTML = formData.sEmail;
    selectedRow.cells[3].innerHTML = formData.sClass;
    selectedRow.cells[4].innerHTML = formData.eYear;
    selectedRow.cells[5].innerHTML = formData.sCity;
    selectedRow.cells[6].innerHTML = formData.sCountry;
}

function onDelete(td){
    if(confirm("Are You Sure to delete this record ???"));
    row = td.parentElement.parentElement;
    document.getElementById("empList").deleteRow(row.rowIndex);
    resetForm();
}