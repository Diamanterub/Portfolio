window.addEventListener("load", () => {


    //Portfolio Information

    let piName = document.getElementById("piName")
    let piCategory = document.getElementById("piCategory")
    let piClient = document.getElementById("piClient")
    let piDate = document.getElementById("piDate")

    let img1 = document.getElementById("img1")
    let img2 = document.getElementById("img2")
    let img3 = document.getElementById("img3")
    let img4 = document.getElementById("img4")
    

    //Portfolio Desc

    //Title
    let pd1 = document.getElementById("pd1");
    //Description
    let pd2 = document.getElementById("pd2");

    //Portfolio images
 
    let img5 = document.getElementById("img5")
    let img6 = document.getElementById("img6")


    let aplication

    if (localStorage.getItem("project") != null) {
        aplication = localStorage.getItem("project")
    } else {

    }


    //Edit content based on the app selected
    switch (aplication) {
        case "swift":

            pd1.innerHTML = "test"
            pd2.innerHTML = "test"

            break;

        case "paper":

            pd1.innerHTML = "test1"
            pd2.innerHTML = "test1"

            break;
        case "virtualmon":


            break;
        case "pang":


            break;
        case "supermarket":


            break;
        case "decoded":


            break;
        case "pokemon":


            break;
        default:
            alert("yes")
            break;
    }


})