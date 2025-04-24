$(document).ready(function() {
    $("#firstNameerror").hide();
    $("#lastNameerror").hide();
    $("#addresserror").hide();
    $("#emailerror").hide();
    $("#passworderror").hide();
    $("#confirmpassworderror").hide();
    $("#gendererror").hide();
    $("#doberror").hide();
    $("#ziperror").hide();
    $("#mobileerror").hide();

    $("#firstName").focusout(function() {
        check_fname();
    });
    $("#lastName").focusout(function() {
        check_lname();
    });
    $("#address").focusout(function() {
        check_address();
    })
    $("#email").focusout(function() {
        check_email();
    });
    $("#password").focusout(function(){
        check_password();
    });
    $("#confirmpassword").focusout(function(){
        check_confirmpassword();
    });
    $("#dob").focusout(function() {
        check_dob();
    })
    $("#gender").focusout(function() {
        check_gender();
    });
    $("#zip").focusout(function(){
        check_zip();
    });
    $("#mobile").focusout(function() {
        check_mobile();
    });

    var error_fisrtName = false;
    var error_lastName = false;
    var error_address = false;
    var error_email = false;
    var error_password = false;
    var error_confirmpassword = false;
    var error_gender = false;
    var error_dob = false;
    var error_zip = false;
    var error_mobile = false;

    function check_fname() {
        var pattern = /^[a-zA-Z]*$/;
        var fname = $("#firstName").val();
        
        if(pattern.test(fname) && fname !==''){
            $("#firstNameerror").hide();
            $("#firstName").css("border-bottom", "2px solid #34F458");
            error_fisrtName = false;
        }
        else if(fname === ''){
            $("#firstNameerror").html("First name must not be empty");
            $("#firstNameerror").show();
            $("#firstName").css("border-bottom", "2px solid #F90A0A");
            error_fisrtName = true;
        }
        else{
            $("#firstNameerror").html("Kindly enter your first name correctly ");
            $("#firstNameerror").show();
            $("#firstName").css("border-bottom", "2px solid #F90A0A");
            error_fisrtName = true;
        }
    };

    function check_lname() {
        var pattern = /^[a-zA-Z]*$/;
        var lname = $("#lastName").val();

        if (pattern.test(lname) && lname!==''){
            $("#lastNameerror").hide();
            $("#lastName").css("border-bottom", "2px solid #34F458");
            error_lastName = false;
        }
        else if (lname === '') {
            $("#lastNameerror").html("Last name must not be empty");
            $("#lastNameerror").show();
            $("#lastName").css("border-bottom", "2px solid #F90A0A")
            error_lastName = true;
        }
        else {
            $("#lastNameerror").html("Kindly enter your last name correctly");
            $("#lastNameerror").show();
            $("#lastName").css("border-bottom", "2px solid #F90A0A")
            error_lastName = true;
        }
    };

    function check_address() {
        var address = $("#address").val();

        if (address !== ''){
            $("#addresserror").hide();
            $("#address").css("border-bottom", "2px solid #34F458");
            error_address = false;
        }
        else{
            $("#addresserror").html("Please enter your address");
            $("#addresserror").show();
            $("#address").css("border-bottom", "2px solid #F90A0A");
            error_address = true;
        }
    };

    function check_email(){
        var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var email = $("#email").val();

        if(pattern.test(email) && email !== ''){
            $("#emailerror").hide();
            $("#email").css("border-bottom", "2px solid #34F458");
            error_email = false;
        }
        else{
            $("#emailerror").html("Kindly enter a valid email address");
            $("#emailerror").show();
            $("#email").css("border-bottom", "2px solid #F90A0A");
            error_email = true;
        }

    };

    function check_password(){
        var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        var password = $("#password").val();

        if(pattern.test(password) && password !== ''){
            $("#passworderror").hide();
            $("#password").css("border-bottom", "2px solid #34F458");
            error_password = false;
        }
        else{
            $("#passworderror").html("Password must be 8+ chars with 1 uppercase, 1 lowercase, 1 number & 1 special character.");
            $("#passworderror").show();
            $("#password").css("border-bottom", "2px solid #F90A0A");
            error_password = true;
        }

    };

    function check_confirmpassword() {
        var password = $("#password").val();
        var confirmpassword = $("#confirmpassword").val();
    
        if (confirmpassword === password && confirmpassword !== '') {
            $("#confirmpassworderror").hide();
            $("#confirmPassword").css("border-bottom", "2px solid #34F458");
            error_confirmpassword = false;
        } else {
            $("#confirmpassworderror").html("Confirm password must match the password.");
            $("#confirmpassworderror").show();
            $("#confirmPassword").css("border-bottom", "2px solid #F90A0A");
            error_confirmpassword = true;
        }
    };

    function check_gender() {
        
        var gender = $("#gender").val();
    
        if (gender !== '') {
            $("#gendererror").hide();
            $("#gender").css("border-bottom", "2px solid #34F458");
            error_gender = false;
        } else {
            $("#gendererror").html("please select the gender");
            $("#gendererror").show();
            $("#gender").css("border-bottom", "2px solid #F90A0A");
            error_gender = true;
        }
    };

    function check_dob() {
        var dob = $("#dob").val();
        if (dob !== '') {
            var birthDate = new Date(dob);
            var today = new Date();
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
    
            if (age >= 18) {
                $("#doberror").hide();
                $("#dob").css("border-bottom", "2px solid #34F458");
                error_dob = false;
                $("#age").val(age);
            } else {
                $("#doberror").html("You must be at least 18 years old.");
                $("#doberror").show();
                $("#dob").css("border-bottom", "2px solid #F90A0A");
                error_dob = true;
                $("#age").val('');
            }
        } else {
            $("#doberror").html("Please select your date of birth.");
            $("#doberror").show();
            $("#dob").css("border-bottom", "2px solid #F90A0A");
            error_dob = true;
            $("#age").val('');
        }
    }
    
    $("#dob").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1925:" + (new Date().getFullYear() - 18),
        dateFormat: "yy-mm-dd",
        maxDate: "-18Y",
        onSelect: function (dateText) {
            $("#dob").val(dateText);
            check_dob();
        }
    });
    

    function check_zip(){
        var pattern = /^[1-9][0-9]{5}$/;
        var zip = $("#zip").val();

        if (pattern.test(zip) &&zip !== ''){
            $("#ziperror").hide();
            $("#zip").css("border-bottom", "2px solid #34F458");
            error_zip = false;
        }
        else if(zip === ''){
            $("#ziperror").html("Please ensure your ZIP code is not empty ");
            $("#ziperror").show();
            $("#zip").css("border-bottom", "2px solid #F90A0A");
            error_zip = true;
        } 
        else {
            $("#ziperror").html("Please ensure your ZIP code contains 6 numbers");
            $("#ziperror").show();
            $("#zip").css("border-bottom", "2px solid #F90A0A");
            error_zip = true;
        }
        
    };

    function check_mobile() {

        var pattern = /^(0|91)?[6-9][0-9]{9}$/;
        var mobile = $("#mobile").val();

        if(pattern.test(mobile) && mobile !== ''){
            $("#mobileerror").hide();
            $("#mobile").css("border-bottom", "2px solid #34F458");
            error_mobile = false;
        } else {
            $("#mobileerror").html("Please ensure your mobile number is entered correctly");
            $("#mobileerror").show();
            $("#mobile").css("border-bottom", "2px solid #F90A0A");
            error_mobile = true;
        }
    };
    


    $("#form").submit(function(e) {
        e.preventDefault();
       

        check_fname();
        check_lname();
        check_address();
        check_email();
        check_password();
        check_confirmpassword();
        check_gender();
        check_dob();
        check_zip();
        check_mobile();

        if (error_fisrtName === false && error_lastName===false && error_address===false && error_email=== false && error_password==false &&error_confirmpassword===false && 
        error_gender===false  &&   error_dob===false &&
        error_zip === false && error_mobile === false
        ){
            alert("Thank you for completing the form");
            $("#form")[0].reset();
            $("input").css("border-bottom", "1px solid #ccc");
            $("#address").css("border-bottom", "1px solid #ccc");
            $("#gender").css("border-bottom", "1px solid #ccc");
            
            
        }
        else {
            e.preventDefault();
            
        }
    });
    $("#reset").click(function() {
        $("#form")[0].reset();
        $("input").css("border-bottom", "1px solid #ccc");
    });

  

});