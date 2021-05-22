// This is a compiling File for Compiling SASS or SCSS
// Just Import this File and it will Convert all SASS or SCSS in the Following Webpage to CSS

const onloadForSass = event => {
    onload = () => {
        event ();
    }
}

const importScript = () => {

    let sassScript = document.createElement("script");
    sassScript.src = "https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js";
    document.head.appendChild(sassScript);

}

importScript ();

const compileText = text => {
    Sass.compile(text, resp => {
        let cssTag = document.createElement("style");
        cssTag.innerHTML = resp.text;
        resp.formatted && console.error(resp.formatted);
        resp.text && document.head.appendChild(cssTag);
    });
}

const combineText = textFromLib => {
    let styleTag = document.createElement("style");
    document.querySelectorAll("style[fetched='true'").forEach(tag => styleTag.innerHTML += "\n" + tag.innerHTML + "\n");
    styleTag.innerHTML += "\n" + document.querySelectorAll("style")[0].innerHTML + "\n";
    document.head.appendChild(styleTag);
    compileText (styleTag.innerHTML);
}

const convertText = libText => {
    var linkTag = document.createElement("style");
    linkTag.setAttribute("fetched", "true");
    linkTag.innerHTML = libText;
    document.head.appendChild(linkTag);
    combineText (linkTag.innerHTML);
}

const makeText = url => {
    fetch(url)
      .then(resp => resp.text())
      .then(data => convertText (data))
}

onloadForSass(() => {
    if (document.head.contains(document.querySelector("link[href]"))) {
        document.querySelectorAll("link[href]").forEach(link => makeText (link.getAttribute("href")));
    } else {
        document.querySelectorAll("style").forEach(tag => compileText (tag.innerHTML));
    }
});
