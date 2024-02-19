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
        if(e.keyCode === keydownRight){            // if I keydown left, I will go to the left
            if(tabFocus >= tabs.length -1){
                tabFocus=0
            } else {
                tabFocus++
            }
        } else if(e.keyCode === keydownLeft){      // if I keydown left, I will go to the left
            if(tabFocus <=0){
                tabFocus = tabs.length-1
            } else {
                tabFocus--
            }
        }
    }

    console.log('current index', tabFocus)
    tabs[tabFocus].setAttribute('tabindex', 0)
    tabs[tabFocus].focus()
} 

function changeTabPanel(e){
    const targetTab = e.target
    const targetPanel = targetTab.getAttribute('aria-controls')
    const targetImg = targetTab.getAttribute('data-image')

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;
    /* This fetches the panel information */
    hideContent(mainContainer, '[role="tabpanel"]');

    revealContent(mainContainer, `#${targetPanel}`)
    /* This fetches the image as well */

    hideContent(mainContainer, '[role="tabImg"]');
    revealContent(mainContainer, `#${targetImg}`)
    // Set the tab as active

    tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute('aria-selected', false)
    
    targetTab.setAttribute('aria-selected', true)
    console.log(targetTab)
}

function hideContent(parent, content){
    parent
        .querySelectorAll(content)
        .forEach((item)=>{
        item.setAttribute('hidden', true);
})
}

function revealContent(parent, content) {
    parent.querySelector(content).removeAttribute("hidden")
}