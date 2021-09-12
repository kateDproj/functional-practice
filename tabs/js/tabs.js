// get all [.tab] elements on the page and assign them a function tabs()

document.querySelectorAll('.tab').forEach(function (element) {
    element.onclick = tabs;
});

function tabs() {
    let tabId = this.parentNode.dataset.tab;
    //*********get the idx of the clicked on tab** */
    let idx = Array.from(this.parentNode.children).indexOf(this);
    //*********get the body of tabs by id********** */
    let tabs = document.querySelector(tabId);
    //iterate through children
    for (let i = 0; i < tabs.children.length; i++) {
        if (i == idx)
            tabs.children[idx].classList.remove('hidden');
        else
            tabs.children[i].classList.add('hidden');
    }

}