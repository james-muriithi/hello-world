// the $(document).ready() is a jquery function that allows the page to totally load before executing any code inside it
$(document).ready(function() {//read more about it
	// alert("In this one i have added this script.js,bootstrapValidator in js and css folder and font awesome for the icons. Happy Coding :)");
	//comment the alert to remove the alert
	$('.login-form').on('submit', function(event) {
		event.preventDefault();
		//on submit of the form i.e on clicking the login button prevent the page from submiting first so that 
		//you verify the details first
	});

	//now instantiate the bootstrapValidator
	$('.login-form').bootstrapValidator({
		message: 'This value is not valid',
        live: "disabled",
        feedbackIcons: {
            valid: 'fa fa-check',//the icon to be displayed if the info is valid
            invalid: 'fa fa-times',//the icon to be displayed if the info is invalid
            validating: 'fa fa-refresh'//the icon to be displayed when refreshing
        },
        //fields to validate
        fields: {
        	//before the colons you put the name attribute in the input
        	email: {
                // message: 'The email is not valid',
                validators: {
                	//when empty it will bring this error message
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    //this is a regular expression to validate email
                    regexp: {
                        regexp: /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i,
                        message: 'Please provide a valid email address'
                    }
                }
            },
            password: {
                message: 'The password is not valid',
                validators: {
                	//when empty it will bring this error message
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    }
                    //this is to validate passowrd strength
                    // regexp: {
                    //     regexp: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/i,
                    //     message: 'Please a passord with atleast one uppercase letter, one lowercase, one digit, and of length 6 or more'
                    // }
                }
            }
        },onSuccess: function(e, data) {
        	//if all the fields are valid
        	var $form = $(e.target);//no idea what this does but i think its to instatiante the form
        	//use ajax to post the form details
            //the serialize is a jquery function that converts the form data into the url format 
            //of sending data eg email=muriithijames123%40gmail.com&password=6yyyK0
            $.post('verify_user.php', {formData: $form.serialize()}, function(data) {
                /*optional stuff to do after success */
                //the data is what is echoed on the verified_user.php file 
                alert(data);
                //trim is a jquery function that removes spaces before a word and after
                if ($.trim(data) == 'success') {
                    //if the details were correct
                    //redirect to home page
                    window.location.href = "home.php";
                }
            });
        	



        	$form
                .bootstrapValidator('disableSubmitButtons', false)
                .bootstrapValidator('resetForm', true);//reset the form to normal and clear values 
        }
	});

});

//i know its much to take in but you dont have to cram it 
//all you need to know is where you ned to change and reuse it in as many as possible project