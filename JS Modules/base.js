const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);
const rand = val => Math.floor(Math.random() * (val || 100));
const handleSideNav = isOpened => isOpened ? $("#sidenav").classList.remove("show") : $("#sidenav").classList.add("show");
const searchBar = (elContainer, el, self, displayProperty) => {
    let elementContainer = document.querySelector(elContainer);
    let element = elementContainer.querySelectorAll(el);
    let value = self.value.toUpperCase();
    for(let i = 0; i < element.length; i++){
        if(element[i].textContent.toUpperCase().indexOf(value) > - 1){
            element[i].style.display = displayProperty || "block";
        } else {
            element[i].style.display = "none";
        }
    }
}
const copy = (val, isTag = false) => {
    let inp = document.createElement("input");
    document.body.appendChild(inp);
    inp.value = isTag ? document.querySelector(val).innerText : val;
    inp.select();
    inp.setSelectionRange(0, 9999999999999);
    document.execCommand("Copy");
    inp.remove();
}

export { $, $$, rand, handleSideNav, searchBar, copy }
