function login()
{
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname =='')
    {
        alert("please enter user name.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(uname))
    {
        alert("Enter valid email id.");
    }
    else if(pwd.length < 6 || pwd.length > 6)
    {
        alert("Password min and max length is 6.")
    }
    else
    {
alert('Thank You for Login & You are Redirecting to Our Website');
//Redirecting to other page or webste code or you can set your own html page.
   window.location = "#";
        }
}
 function Signup(e) { 
    e.preventDefault();
    var name = document.forms["RegForm"]["Name"]; 
    var email = document.forms["RegForm"]["EMail"]; 
    var password = document.forms["RegForm"]["Password"]; 

    if (name.value == "") { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 


    if (email.value == "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 



    if (password.value == "") { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
    alert('Form Submitted Succesfully');

    return true; 
} 