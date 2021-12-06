const firstname = document.querySelector('.firstname');
const lastname = document.querySelector('.lastname');
const midname = document.querySelector('.midname');
const dob = document.querySelector('.dob');
const phonenumber = document.querySelector('.number');
const email = document.querySelector('.mail');
const password = document.querySelector('.password');
const tableSample = document.querySelector('.sample');


console.log(firstname.value)

// const logger = ()=>{
//     console.log(firstname.value);
// }

function logi(){
const newt = tableSample.cloneNode(true)

const n = 7
for (let index = 0; index < 7; index++) {
    //const element = [index];
    const liste = [firstname.value,lastname.value,midname.value,dob.value,phonenumber.value,email.value,password.value]
    newt.getElementsByTagName('td')[index].innerText = liste[index]

}



document.querySelector('.table').append(newt)

    // console.log(
    //     {


    //         "firstname" : firstname.value,
    //         "lastname" : lastname.value,
    //         "midname" : midname.value,
    //         "dob" : dob.value,
    //         "phone number" : phonenumber.value,
    //         "email" : email.value,
    //         "password" : password.value

    //     }
    // )

}

