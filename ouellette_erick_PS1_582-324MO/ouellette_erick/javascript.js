let chaptersObj = {
    debut : {
        subtitle : "Début",
        text : "Gamer man commence sa première journée de secondaire. Il doit se rendre à l'école pour la première fois par lui-même. Une multitude d'obstacles l'attend dans son chemin. Sera-t'il à la hauteur?",
        img : "assets/images/bed.jpg", 
        options: [
              {
                text: "Choix de se réveiller",
                action: "goToChapter('reveil_choix')"
            }]
    },

    reveil_choix : {
        subtitle : "Choix de se réveiller",
        text : "Il doit se réveiller pour aller à son premier jours d'école, mais il est fatigué car il a joué à des jeux-vidéos jusqu'à minuit la veille. Que fait-il? Aller à l'école ou dormir?",
        img : "assets/images/wake_or_sleep.jpg",
        options: [
             {
                text: "dors",
                action: "goToChapter('dors')"
            },
            trajet_choix = {
                text: "Choix de déplacement",
                action: "goToChapter('prendre_carte_metro')"
            }]
    },

     dors : {
        subtitle : "S'endormir",
        text : "Malheureusement, il s'endort et rate sa première journée. Sa mère est fâchée et lui confisque son ordinateur ce qui le plonge dans une dépression.",
        img : "assets/images/game_over.jpg",
        options: [
             {
                text: "Début",
                action: "goToChapter('debut')"
            }]
    },

    prendre_carte_metro : {
        subtitle : "Prendre la carte métro",
        text : "Gamer Man a besoin de sa carte métro pour prendre l'autobus. Est-ce qu'il la prend?",
        img : "assets/images/tst-ticket.jpg",
        options: [
            {
                text: "Prendre la carte",
                action: "useCard()"
            }]
    },

    trajet_choix : {
        subtitle : "Choix de déplacement",
        text : "Il sort de la maison pour aller à l'école en amenant son ordinateur. A-t'il pris sa carte de métro?.",
        img : "assets/images/bus_marche.jpg",
        options: [
             {
                text: "Oui",
                action: "cardcheck()"
            },
             {
                text: "Non",
                action:  "goToChapter('chemin_choix')"
            }]
           
    },

    chemin_choix : {
        subtitle : "Choix du chemin",
        text : "Gamer man connait le chemin de son école secondaire. Mais il a entendu à propos d'un raccourci qui lui sauverait beaucoup de temps afin qu'il joue avant son cours. Que choisit-t'il?",
        img : "assets/images/choix_trajets.jpg",
        options: [
            {
                text: "Choix de l'approche face à l'ours",
                action: "goToChapter('ours_choix')"
            },
            {
                text: "Chemin principal",
                action: "goToChapter('chemin_principal')"
            }]
            
    },

    ours_choix : {
        subtitle : "Choix de l'approche face à l'ours",
        text : "Il choisit le raccourci qui lui mène dans une forêt. Tout va bien jusqu'à ce qu'un ours apparait. L'ours a un grand appétit. Gamer man a deux options: lancer son ordinateur sur l'ours pour l'effrayer ou jouer le mort.",
        img : "assets/images/bed.jpg",
        options: [
             {
                text: "Lancer de l'ordinateur",
                action: "goToChapter('attaque')"
            },
             {
                text: "L'ours capture Gamer man",
                action: "goToChapter('ours_capture')"
            }]
    },

    attaque : {
        subtitle : "Lancer de l'ordinateur",
        text : "Gamer man prend son courage à deux mains et cours vers l'ours. Il crie très fort et jette son ordinateur sur le crâne de l'ours. L'ours est effrayée par lui et meurt d'une crise cardiaque avant même l'impact.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Retour au chemin principal",
                action: "goToChapter('retour_chemin')"
            }]
    },

    retour_chemin : {
        subtitle : "Retour au chemin principal",
        text : "Gamer man est surpris de ce qui est arrivé et aussi surpris que son ordinateur est intact. Malgré cela, il est traumatisé par cet évènement qui restera dans sa mémoire à jamais. Il retourne au chemin principal.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Arrivée à l'école",
                action: "goToChapter('arrive_ecole')"
            }]
    },

    ours_capture : {
        subtitle : "L'ours capture Gamer man",
        text : "Malgré sa bonne idée, l'ours n'est pas aussi stupide qu'il pense. Gamer man se fait capturer par l'ours qui le ramène dans sa tanière pour se nourrir et nourrir ses bébés.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Début",
                action: "goToChapter('debut')"
            }] 
    },

    chemin_principal : {
        subtitle : "Chemin principal",
        text : "Gamer man choisit le chemin principal et rejoint ses amis d'école primaire qu'il n'a pas vu depuis la fin du primaire.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Arrivée à l'école",
                action: "goToChapter('arrive_ecole')"
            }] 
    },
    
    arrive_ecole : {
        subtitle : "Arrivée à l'école",
        text : "Gamer man arrive à l'école et commence enfin son premier jour d'école.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Choix entre école et classe",
                action: "goToChapter('jouer_ecole_choix')"
            }]  
    },

    jouer_ecole_choix : {
        subtitle : "Choix entre école et classe",
        text : "Les cours commencent bientôt mais il recoit une notification. C'est un évènement qui se passe dans un de ses jeux préférés. Il ne veut pas manquer ca mais l'école est toute aussi importante.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Jouer",
                action: "goToChapter('jouer')"
            },
             {
                text: "Cours",
                action: "goToChapter('cours')"
            }] 
    },

    jouer : {
        subtitle : "Jouer",
        text : "Il s'installe dans une toilette de l'école et active son ordinateur. Il joue à son jeu et s'amuse beaucoup.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Suspension",
                action: "goToChapter('suspension')"
            }] 
    },

    suspension : {
        subtitle : "Suspension",
        text : "Le directeur de l'école rentre dans la toilette et entend de la musique. Il découvre les manigances de Gamer man et confisque son ordinateur et le suspend pendant l'entiereté de son année scolaire.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Début",
                action: "goToChapter('debut')"
            }]
    },

    cours : {
        subtitle : "Cours",
        text : "Gamer man va à ses cours et passe la journée à attendre la fin des cours pour enfin retourner chez lui et pour participer à l'évènement.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Choix de dormir ou de jouer",
                action: "goToChapter('dormir_jouer_choix')"
            }] 
    },

    dormir_jouer_choix : {
        subtitle : "Choix de dormir ou de jouer",
        text : "Il est fatigué à cause de sa journée longue, mais il veut absolument jouer à l'évènement. Le choix est dur.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Dormir",
                action: "goToChapter('dormir')"
            },
             {
                text: "Coma",
                action: "goToChapter('coma')"
            }] 
    },

    dormir: {
        subtitle : "Dormir",
        text : "Gamer man sacrifie ses envies pour se reposer. Le lendemain, il est prêt à aller à l'école et à réussir son année pour avoir la chance que ses parents lui achète en cadeau la nouvelle carte graphique de Nvidia à 2000 dollars.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Début",
                action: "goToChapter('debut')"
            }]
    },

    coma : {
        subtitle : "Coma",
        text : "Gamer man sacrifie sa santé et sa sanité pour jouer à son jeu jusqu'au lever du soleil. Le lendemain, ses parents le trouve inconscient. Gamer man tombe dans un coma.",
        img : "../assets/images/bed.jpg",
        options: [
             {
                text: "Début",
                action: "goToChapter('debut')"
            }] 
    },

};



function goToChapter(chapterName) {
    console.log(chaptersObj[chapterName]["subtitle"]);
    console.log(chaptersObj[chapterName]["text"]);
    console.log(chaptersObj[chapterName]["img"]);
    document.querySelector(".Titre").innerHTML = chaptersObj[chapterName]["subtitle"];
    document.querySelector(".Texte").innerHTML = chaptersObj[chapterName]["text"];
    document.querySelector(".photo").src = (chaptersObj[chapterName]["img"]);
    document.querySelector(".boutons").innerHTML=""
    
    for(i in chaptersObj[chapterName].options) {
        const btn = document.createElement("button");
        btn.setAttribute("class", "bouton");
        btn.setAttribute("onclick", chaptersObj[chapterName].options[i].action);
        const node = document.createTextNode(chaptersObj[chapterName].options[i].text);
        btn.appendChild(node)
        const parent = document.querySelector(".boutons");
        parent.appendChild(btn)
    }
};


function useCard(){
     card = true;
     goToChapter("trajet_choix");
}

function cardcheck(){
    if (card){
        goToChapter("arrive_ecole");
    } else {
        goToChapter("chemin_choix");
    }
}

let card = false;