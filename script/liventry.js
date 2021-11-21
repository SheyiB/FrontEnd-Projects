const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const midname = document.querySelector('.midname');
const dob = document.querySelector('.dob');
const phonenumber = document.querySelector('.number');
const email = document.querySelector('.mail');
const password = document.querySelector('.password');


console.log(firstname.value)

// const logger = ()=>{
//     console.log(firstname.value);
// }

function logi(){
    console.log(
        {
            "firstname" : firstname.value,
            "lastname" : lastname.value,
            "midname" : midname.value,
            "dob" : dob.value,
            "phone number" : phonenumber.value,
            "email" : email.value,
            "password" : password.value
        }
    )

}