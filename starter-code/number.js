const numberList = document.querySelector("[role='numberList']")
console.log('numberList', numberList)
const numbers= numberList.querySelectorAll("[role='number']")
console.log('numbers',numbers)

const keydownLeft=37;
const keydownRight=39;

let currentIndex = 0;
numberList.addEventListener('keydown', highlightCurrentIndex)

numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        const selectedNum = e.target;
        console.log("prefered Number", selectedNum)
        const selectedPanel = selectedNum.getAttribute("aria-controls")
        console.log('The Specific Panel is', selectedPanel)
        const selectedImg = selectedNum.getAttribute("data-image")
        
        const numContainer = num.parentNode
        const ArticleContainer = numContainer.parentNode
        const parentContainer = ArticleContainer.parentNode

        parentContainer.querySelectorAll("[role='num_img']").forEach((img) => {
            console.log("img",img)
            img.setAttribute('hidden', true)
        })

        parentContainer.querySelectorAll("[role=num_panel]").forEach( (panel) => {
            console.log('Panels', panel)
            panel.setAttribute('aria-hidden', true)
        })

        parentContainer.querySelector(`#${selectedImg}`).removeAttribute('hidden')
        parentContainer.querySelector(`#${selectedPanel}`).setAttribute('aria-hidden', false)
    })
})

function highlightCurrentIndex(e){
    if(e.keyCode===keydownLeft || e.keyCode===keydownRight){
        numbers[currentIndex].setAttribute('numberindex', '-1')
        if(e.keyCode===keydownRight){
            if(currentIndex >=numbers.length-1) {
                currentIndex=0;
            }else{
                currentIndex++
            }
        } else if(e.keyCode===keydownLeft){
            if(currentIndex===0){
                currentIndex = numbers.length-1
            }else{
                currentIndex--
            }
        }
        numbers[currentIndex].setAttribute('numberindex', '0')
        numbers[currentIndex].focus()
    }
}

