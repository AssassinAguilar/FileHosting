// This is a Compiler File for compiling SCSS or SASS
/* Credits :-
       The compiling is by offical sass developers. { https://www.github.com/Sass }
       This code is made by Madcoder of Sololearn { https://www.sololearn.com/Profile/17782587/?ref=app } and edited by Assassin { Me }
*/

const sassScript = document.createElement("script");
sassScript.src = "https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js";

document.head.appendChild(sassScript);

const linksTag = document.createElement("style");
document.querySelectorAll("link").forEach(link => {
    fetch(link.getAttribute("href"))
      .then(resp => resp.text())
      .then(data => {
          linksTag.innerHTML = data;
      });
});
document.head.appendChild(linksTag);

onload = () => {

    let styleTags = "";
 document.querySelectorAll("style").forEach(sheets => {
        styleTags += "\n" + sheets.innerHTML + "\n";
    });

    const cssTags = document.createElement("style");
    Sass.compile(styleTags, res => {
        cssTags.innerHTML = res.text;
        res.formatted&&console.error(res.formatted);
        res.text&&document.head.appendChild(cssTags);
    });

}
