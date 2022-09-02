let favicons = [
    //{href: "/images/favicons/apple-touch-icon-57x57.png", sizes: "57x57", rel: "apple-touch-icon-precomposed"},
]

$(document).ready(function () {
    let docHead = document.querySelector("head"); //select document head

    $(".header").load("/scripts/header.html"); //import navigation bar

    // $("footer").load("/scripts/footer.html"); //import page footer

    // for(let i = 0; i < favicons.length; i++){ //apply favicon to the document head
    //     let icon = document.createElement("link");

    //     icon.setAttribute("rel", favicons[i].rel);
    //     icon.setAttribute("href", favicons[i].href);
    //     icon.setAttribute("sizes", favicons[i].sizes);
    //     icon.setAttribute("type", favicons[i].href);

    //     docHead.appendChild(icon); 
    // }
});