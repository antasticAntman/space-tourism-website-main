const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener('keydown', (e) => {
    console.log('Event',e)

    const keydownLeft= 37;
    const keydownRight= 39;

    // change the tabindex of the current tab to -1
    const currentTab = tabs.getAttribute('tabindex')
    console.log('current tab',currentTab)
    // if the right key is pushed, move to the right
    if(keydownRight) {
        
    }
    // if the left key is pushed, move to the left
})