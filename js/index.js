const ruleOne = document.querySelector("#headingOne .btn");
const ruleTwo = document.querySelector("#headingTwo .btn");
const ruleThree = document.querySelector("#headingThree .btn");
const ruleFour = document.querySelector("#headingFour .btn");
const ruleFive = document.querySelector("#headingFive .btn");


function callback(mutationsList) {
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            var elem = mutation.target.parentNode;
            elem.classList.toggle("dropright");
        }
    })
}

const mutationObserver = new MutationObserver(callback);

mutationObserver.observe(ruleOne, { attributes: true });
mutationObserver.observe(ruleTwo, { attributes: true });
mutationObserver.observe(ruleThree, { attributes: true });
mutationObserver.observe(ruleFour, { attributes: true });
mutationObserver.observe(ruleFive, { attributes: true });
