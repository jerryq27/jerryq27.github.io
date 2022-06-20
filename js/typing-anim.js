---
---

if(window.location.pathname === "/") {
    console.log(document.readyState);

    let typeIt = new TypeIt("#site-title", {
        strings: ["{{ site.title }}"],
        cursorChar: "_",
        speed: 95,
        afterComplete: instance => {
            new TypeIt("#site-description", {
                strings: ["{{ site.description }}"],
                cursorChar: "_",
                speed: 50,
            }).go();

            // instance.destroy();
            typeIt.destroy();
        },
    }).go();
    console.log(document.readyState);
}