var attempt = 3; //the variable that counts the attempt

var objPeople = [
    {
        username:"sam",
        password:"codfy"
    },
    {
        username:"admi",
        password:"admin123"
    },
    {
        username:"johndoe",
        password:"samcrow"
    }

]
//function to validate the user

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var i;
    for(i=0;i<objPeople.length;i++){
        if(username==objPeople[i].username && password==objPeople[i].password){
            alert('login sucessfully');
            window.location = "user.html";
            return false
        }else{
            attempt--;
            alert("do you have"+attempt+"to try");
            if(attempt==0){
                document.getElementById("username").disabled = true;
                document.getElementById("password").disabled = true;

                return false;
                
            }
        }

        }
    }

