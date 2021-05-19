const $ = el => document.querySelector(el);

const sassScript = document.createElement("script");
sassScript.src = "https://cdnjs.cloudflare.com/ajax/libs/sass.js/0.9.12/sass.sync.min.js";

document.head.appendChild(sassScript);

const compileSCSS = () => {
    Sass.compile($("style[type='scss']").innerHTML, res => {
        let cssStyleTag = document.createElement("style");
        cssStyleTag.innerHTML = res.text;
        res.formatted&&console.error(res.formatted);
        res.text&&document.head.appendChild(cssStyleTag);
    });
}

const compileSASS = () => {
    Sass.compile($("style[type='sass']").innerHTML, res => {
        let cssStyleTag = document.createElement("style");
        cssStyleTag.innerHTML = res.text;
        res.formatted&&console.error(res.formatted);
        res.text&&document.head.appendChild(cssStyleTag);
    });
}
