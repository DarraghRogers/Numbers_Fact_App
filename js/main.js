let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let factSelect = document.querySelector('#factSelect');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax);

function getFactAjax() {
    let number = numberInput.value;
    let sel = factSelect.value;

    //ajax crash course will teach you this
    let xhr = new XMLHttpRequest();

    if (sel === 'number') {
        xhr.open('GET', 'http://numbersapi.com/' + number);
    } else if (sel === 'date') {
        xhr.open('GET', 'http://numbersapi.com/' + number + '/year');
    }


    xhr.onload = function () {
        if (this.status == 200 && number != '') {
            fact.style.display = 'block';
            factText.innerText = this.responseText;
        }
    }

    xhr.send();
}

// function getFactFetch() {
//     let number = numberInput.value;

//     fetch('http://numbersapi.com/' + number)
//         .then(response => response.text())
//         .then(data => {
//             if (number != '') {
//                 fact.style.display = 'block';
//                 factText.innerText = data;
//             }
//         })
//         .catch(err => console.log(err));
// }