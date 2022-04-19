// otwieranie pliku json 
A = document.getElementById("results");
A.addEventListener("click",getFlights);

function getFlights(){
    fetch("../flights.json")
    .then(response => response.json())
    .then(data => {
        let output = '<div>Wyniki wyszukiwania:</div>';
        data.forEach(function(flight){
            output += `
                <ul>
                    <li>${flight.from}</li>
                    <li>${flight.to}</li>
                    <li>${flight.date}</li>
                    <li>${flight.price}PLN</li>
                </ul>    
            `;
        })
        // console.log(data);
        document.getElementById("results").innerHTML = output;
    })
    // .catch(err => console.log(err)
    }



    
// values

// const from = document.getElementById('wylot').value;
// console.log(from);
// const to = document.getElementById('przylot').value;
// console.log(to);
// const date = document.getElementById('date').value;
// console.log(date);

//input date 

const today = new Date();
const twoWeeks = new Date();

twoWeeks.setDate(today.getDate() + 14);

const input = document.querySelector('[name=date]');

input.setAttribute('min', today.toISOString().slice(0, 10));
input.setAttribute('max', twoWeeks.toISOString().slice(0, 10));

// ilość osób 

const btn = document.querySelector('btn');

document.getElementById('btn').addEventListener("click",search);

 function search(){
//  console.log("ok");
window.open('http://www.stackoverflow.com/', '_blank');
}



// SingUp form //
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const btn__signUp = document.getElementById('btn__sign-in');
btn__signUp.addEventListener('click', e => {
    console.log("ok");
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	// const formControl = input.parentElement;
	const small = document.querySelector('small');
	small.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
    const small = document.querySelector('small');
	// const formControl = input.parentElement;
	small.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
