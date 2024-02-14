const tabList = document.querySelector('[role="tablist"]')
const tabs = tabList.querySelectorAll('[role="tab"]')

let tabFocus=0;

tabList.addEventListener('keydown', changeTabFocus)

tabs.forEach((tab) => {
    tab.addEventListener('click', changeTabPanel);
})

function changeTabFocus(e) {
    const keydownLeft = 37;
    const keydownRight = 39;

    // console.log('event', e.target.attributes.tabindex)
    // change the tabindex of the current tab to  -1
    if(e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute('tabindex', -1);
    }
    // if I keydown right, I will go to the right
    if(e.keyCode === keydownRight){
        if(tabFocus >= tabs.length -1){
            tabFocus=0
        } else {
            tabFocus++
        }
    }
    // if I keydown left, I will go to the left

    if(e.keyCode ===keydownLeft){
        if(tabFocus <=0){
            tabFocus = tabs.length-1
        } else {
            tabFocus--
        }
    }
    console.log('current index', tabFocus)
    tabs[tabFocus].setAttribute('tabindex', 0)
    tabs[tabFocus].focus()
} 

function changeTabPanel(e){
    const targetTab = e.target
    const targetPanel = targetTab.getAttribute('aria-controls')

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    /* This fetches the panel information */
    mainContainer
        .querySelectorAll('[role="tabpanel"]')
        .forEach((panel)=>{
        panel.setAttribute('hidden', true);
    })
    mainContainer.querySelector(`#${targetPanel}`).removeAttribute("hidden")
    /* This fetches the image as well */
    mainContainer
    .querySelectorAll('[role="tabImg"]')
    .forEach((img)=>{
    img.setAttribute('hidden', true);
})

mainContainer.querySelector(`#img-${targetPanel}`).removeAttribute("hidden")

}