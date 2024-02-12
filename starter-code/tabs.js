const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

let tabFocus=0;

tabList.addEventListener('keydown', (e) => {
    const keydownLeft = 37;
    const keydownRight = 39;

    // console.log('event', e.target.attributes.tabindex)
    // change the tabindex of the current tab to  -1
    if(e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute('tabindex', "-1");
    }
    // if I keydown right, I will go to the right
    console.log('the current before it changes',tabFocus)
    if(e.keyCode === keydownRight){
        tabs[tabFocus].setAttribute('aria-selected', 'false')
        console.log('check the aria selected', tabs[tabFocus])
        if(tabFocus===3){
            tabFocus = 0;
            tabs[tabFocus].setAttribute('aria-selected', 'true')
            console.log('previous', tabs[3])
        } else {
            tabFocus++
            tabs[tabFocus].setAttribute('aria-selected', 'true')
            console.log('previous', tabs[tabFocus - 1])
        }
    }
    // if I keydown left, I will go to the left
    console.log('current tab', tabs[tabFocus])
})