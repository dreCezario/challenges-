const form = document.querySelector('#form')
const rate_one = document.forms['form']['one']
const rate_two = document.forms['form']['two']
const rate_three = document.forms['form']['three']
const rate_four = document.forms['form']['four']
const rate_five = document.forms['form']['five']

function click_one () {
        rate_one.classList.add('click')
        rate_two.classList.remove('click')
        rate_three.classList.remove('click')
        rate_four.classList.remove('click')
        rate_five.classList.remove('click')
    
}

function click_two () {
    rate_two.classList.add('click')
    rate_one.classList.remove('click')
    rate_three.classList.remove('click')
    rate_four.classList.remove('click')
    rate_five.classList.remove('click')
}

function click_three () {
    rate_three.classList.add('click')
    rate_one.classList.remove('click')
    rate_two.classList.remove('click')
    rate_four.classList.remove('click')
    rate_five.classList.remove('click')
}

function click_four () {
    rate_four.classList.add('click')
    rate_one.classList.remove('click')
    rate_two.classList.remove('click')
    rate_three.classList.remove('click')
    rate_five.classList.remove('click')
}

function click_five () {
    rate_five.classList.add('click')
    rate_one.classList.remove('click')
    rate_two.classList.remove('click')
    rate_three.classList.remove('click')
    rate_four.classList.remove('click')
}


rate_one.addEventListener('click', click_one)
rate_two.addEventListener('click', click_two)
rate_three.addEventListener('click', click_three)
rate_four.addEventListener('click', click_four)
rate_five.addEventListener('click', click_five)