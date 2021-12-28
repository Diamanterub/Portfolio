// window.onload() = function () {
//     Typing();
// }

(function () {
    "use Stict"



    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }



    //For the purpose of being SEO friendly its done this way 
    //Rather than using string arrays to insert strings i placed a span on the html page which allows bots and search engines as well as users with js disabled via extension
    //or browser to see the text on the screen 
    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });

    }
})()