const p1 = document.querySelector('#p1score');
const p2 = document.querySelector('#p2score');
const body = document.querySelector('body')
let p1score = parseInt(`${p1.innerText}`);
let p2score = parseInt(`${p2.innerText}`);

const p1plus = document.querySelector('#p1b');
const p2plus = document.querySelector('#p2b');

const playingto = document.querySelector('#playingto');
const reset = document.querySelector('#reset');

let isGameOver = false;
let winScore = 5;

const paragraph = document.querySelector('#paragraph');

let newVal = document.createElement('p');
newVal.innerText = playingto.value;
paragraph.append(newVal);

p1plus.addEventListener('click', function () {

    if (!isGameOver) {
        p1score++;

        if (p1score === winScore) {
            isGameOver = true;
            p1.classList.add('has-text-success');
            p2.classList.add('has-text-danger');
            
            p1plus.disabled = true;
            p2plus.disabled = true;
        }
        p1.textContent = p1score;
    }
})
p2plus.addEventListener('click', function () {

    if (!isGameOver) {
        p2score++;

        if (p2score === winScore) {
            isGameOver = true;
            p2.classList.add('has-text-success');
            p1.classList.add('has-text-danger');
            
            p1plus.disabled = true;
            p2plus.disabled = true;
        }
        p2.textContent = p2score;
    }
})

playingto.addEventListener('change', function () {

    winScore = parseInt(this.value);
    resetfun();
})

reset.addEventListener('click', resetfun)


function resetfun() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1.textContent = 0;
    p2.textContent = 0;
    p1.classList.remove('has-text-success', 'has-text-danger');
    p2.classList.remove('has-text-success', 'has-text-danger');

    p1plus.disabled = false;
    p2plus.disabled = false;
}