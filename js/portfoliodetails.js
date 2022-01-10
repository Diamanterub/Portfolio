window.addEventListener("load", () => {


    //Portfolio Information

    let piName = document.getElementById("piName")
    let piCategory = document.getElementById("piCategory")
    let piClient = document.getElementById("piClient")
    let piDate = document.getElementById("piDate")

    let githubref = document.getElementById("githubref")

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

            //Portfolio Information
            piName.innerHTML = "Swift"
            piCategory.innerHTML = "Web"
            piClient.innerHTML = "School Project"
            piDate.innerHTML = "23 June 2020"

            githubref.href = "https://github.com/Diamanterub/Grupo7"

            //Tecnologies Used
            img1.src = "/img/icons8-html-5.svg"
            img2.src = "/img/icons8-css3.svg"
            img3.src = "/img/icons8-javascript.svg"
            img4.src = "/img/icons8-bootstrap.svg"

            //Desc
            pd1.innerHTML = "Project Description"
            pd2.innerHTML = "This was my first web project done in group with my colleagues. <br> The project is basicly a manager of public races/marathons which helped the user search for certain races and compete with their friends for medals and other items. <br> Because we were fairly new to programming we had some difficulties with css but the end project still looks fairly okay"

            //Images
            img5.src = "/img/Portfolio/Swift1.png"
            img6.src = "/img/Portfolio/Swift2.png"

            break;

        case "paper":

            //Portfolio Information
            piName.innerHTML = "Paper"
            piCategory.innerHTML = "Web"
            piClient.innerHTML = "School Project"
            piDate.innerHTML = "10 June 2021"

            githubref.href = "https://github.com/Cheap-Ship/Project2021"

            //Tecnologies Used
            img1.src = "/img/icons8-html-5.svg"
            img2.src = "/img/icons8-css3.svg"
            img3.src = "/img/icons8-vue-js.svg"
            img4.src = "/img/icons8-sql-32.png"

            //Desc
            pd1.innerHTML = "Project Description"
            pd2.innerHTML = "Paper is a plataform that helped 3 personas of our clients. <br>The students that are almost finished in their university courses can use to find and contact new companies for intership. <br>The companies can use the plataform to agile the process of getting their new interns. <br>The teachers can use the plataform to better alocate this interships to the student.  <br> This was proposed to help the very complicated process of the university gaining these intership oportunities and agile the process as a whole. <br> Furthermore this project gained high praise from the teachers but still there were some of important features that were planned but couldn't be developed in time meaning that the project couldn't be implemented in the university"

            //Images
            img5.src = "/img/Portfolio/Paper1.png"
            img6.src = "/img/Portfolio/Paper2.png"



            break;
        case "virtualmon":


            //Portfolio Information
            piName.innerHTML = "VirtualMon"
            piCategory.innerHTML = "Android"
            piClient.innerHTML = "School Project and <a href='https://www.riopele.pt/' target ='_blank'>Riopele</a>"
            piDate.innerHTML = "In progress"

            githubref.href = "https://gitlab.com/esmapp-21-22/grupo-5"

            //Tecnologies Used
            img1.src = "/img/icons8-java.svg"
            img2.src = "/img/icons8-android-os.svg"
            img3.src = "/img/icons8-sql-32.png"

            //Desc
            pd1.innerHTML = "Project Description"
            pd2.innerHTML = "Virtualmon is a platform that would help the workers in Riopele do their tasks like verifying the diferent machines and seeing the production order of the machine"

            //Images
            img5.src = ""
            img6.src = ""

            break;
        case "pang":

            //Portfolio Information
            piName.innerHTML = "Pang Souls"
            piCategory.innerHTML = "Web"
            piClient.innerHTML = "School Project"
            piDate.innerHTML = "25 November 2020"

            githubref.href = "https://github.com/Diamanterub/CG2020"

            //Tecnologies Used
            img1.src = "/img/icons8-html-5.svg"
            img2.src = "/img/icons8-css3.svg"
            img3.src = "/img/icons8-javascript.svg"

            //Desc
            pd1.innerHTML = "Project Description"
            pd2.innerHTML = "Pang Souls is based on the original Buster bros that was released in the 90s <br> This incredible game was only made using html canvas and javascript and supported two players playing at the same time using the same keyboard <br>This was one of my favorite projects to work in university with my colleagues because we were redoing such an old and iconic game <br> We felt the game was so dificult at some points that we named the game Pang Souls and we made competions between us to try to beat it"

            //Images
            img5.src = "/img/Portfolio/PangSouls1.png"
            img6.src = "/img/Portfolio/PangSouls2.png"

            break;
        case "supermarket":


            //Portfolio Information
            piName.innerHTML = "Supermarket"
            piCategory.innerHTML = "Web"
            piClient.innerHTML = "School Project"
            piDate.innerHTML = "20 January 2021"

            githubref.href = "https://github.com/Diamanterub/Projecto2CG"

            //Tecnologies Used
            img1.src = "/img/icons8-html-5.svg"
            img2.src = "/img/icons8-css3.svg"
            img3.src = "/img/icons8-javascript.svg"

            //Desc
            pd1.innerHTML = "Project Description"
            pd2.innerHTML = "Supermarket was our first interaction with the Three.js library which could make 3d objects and lighting <br> We used the knowledge from classes and documentation to make a parking lot with a full function car inside so we could just go around the place in it together with that we also implemented a full day and night cycle in the world"

            //Images
            img5.src = "/img/Portfolio/Supermarket1.png"
            img6.src = "/img/Portfolio/Supermarket2.png"


            break;
        case "decoded":


            //Portfolio Information
            piName.innerHTML = "Decoded"
            piCategory.innerHTML = "Unity"
            piClient.innerHTML = "School Project"
            piDate.innerHTML = "12 June 2021"

            githubref.href = "https://github.com/Diamanterub/Decoded"

            //Tecnologies Used
            img1.src = "/img/icons8-unity.svg"
            img2.src = "/img/icons8-c.svg"

            //Desc
            pd1.innerHTML = "Project Description"
            pd2.innerHTML = "Decoded is a first person speedrun type of game that the main objective is for the player to run to finish line as fast as possible using parkour in the way. <br>This was good project but we didn't really had enough time to develop the whole thing with the other school projects that were more important <br> That meant the various parts of the project needed to be scaled down to fit with the tight schedule <br> I pretend in the future to continue or create a brand new game to implement fully what was the my vision for Decoded"

            //Images
            img5.src = "/img/Portfolio/Decoded1.png"
            img6.src = "/img/Portfolio/Decoded2.png"


            break;
        case "pokemon":


            //Portfolio Information
            piName.innerHTML = "Pokémon Unity"
            piCategory.innerHTML = "Unity"
            piClient.innerHTML = "Personal Project"
            piDate.innerHTML = "In progress"

            githubref.href = ""

            //Tecnologies Used
            img1.src = "/img/icons8-unity.svg"
            img2.src = "/img/icons8-c.svg"

            //Desc
            pd1.innerHTML = "Project Description"
            pd2.innerHTML = "After Decoded i wanted to improve my coding skills in c# and expand my toolset in Unity because of that i started developing Pokemon in Unity and it was supposed to be a gift for my group of friends since we met 10 years ago <br> Unfortunately the project was quite bigger than i expected which led me to postpone the gift but i'm still trying to develop it in my free time and im hoping this year i can gift them all the game <br> I will not reveal the code or github repository just yet because it has certain assets that are not mine but i'm willing to show some code of the game in a later stage of the development process "

            //Images
            img5.src = "/img/Portfolio/PokemonGroup1.png"
            img6.src = "/img/Portfolio/PokemonGroup2.png"
            break;
        default:
            alert("Error")
            throw console.error();
            break;
    }


})