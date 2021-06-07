const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);
const rand = val => Math.floor(Math.random() * (val || 100));
const searchBar = (elContainer, el, self, displayProperty) => {
    let elementContainer = document.querySelector(elContainer);
    let element = elementContainer.querySelectorAll(el);
    let value = self.value.toUpperCase();
    for(i = 0; i < element.length; i++){
        if(element[i].textContent.toUpperCase().indexOf(value) > - 1){
            element[i].style.display = displayProperty || "block";
        } else {
            element[i].style.display = "none";
        }
    }
}

export default { $, $$, rand }
export { searchBar }
