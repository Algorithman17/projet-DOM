//bdd movies
const movies = [
    {
        title: "Les 4 Fantastiques et le Surfer d\´argent",
        infos: [
            {releaseDate: "2007"},
            {during: "1h 32min"},
            {gender: "Action"},
            {director: "Tim Story"},
            {rating: "2.3/5"}
        ],
        cover: "./movie1/covers/les-4-fantastiques-et-le-sufer-d-argent.webp",
        description: "Alors que le mariage de Mr Fantastic et de la Femme Invisible s'annonce comme l'événement de l'année, un mystérieux Surfer d'Argent surgit de l'espace et provoque d'étranges phénomènes sur la Terre. Rapidement les 4 Fantastiques vont découvrir le dessein secret de cet être aux pouvoirs surprenants et la menace qu'il fait peser sur notre planète, mais ils vont aussi voir ressurgir leur ennemi juré.",
        actors: [
            "./movie1/actors/chris-evans.webp",
            "./movie1/actors/doug-jones.jpg",
            "./movie1/actors/ioan-gruffudd.jpg",
            "./movie1/actors/jessica-alba.jpg",
            "./movie1/actors/julian-mcmahon.webp",
            "./movie1/actors/michael-chiklis.webp"
        ],
    },
    {
        title: "Doctor Strange in the Multiverse of Madness",
        infos: [
            {releaseDate: "2022"},
            {during: "2h 28"},
            {gender: "fantasy/horreur"},
            {director: "Sam Raimi"},
            {rating: "3.6/5"}
            ],
        cover: "./movie2/cover/doctor-strange.jpeg",
        description: "Le Docteur Stephen Strange continue ses recherches sur la Pierre du Temps. Cependant, un vieil ami devenu ennemi tente de détruire tous les sorciers de la Terre, ce qui perturbe le plan de Strange.",
        actors: [
            "./movie2/actors/benedict-cumberbatch.jpeg",
            "./movie2/actors/elizabeth-olsen.jpeg",
            "./movie2/actors/hayley-atwell.jpeg",
            "./movie2/actors/john-krasinski.jpeg",
            "./movie2/actors/rachel-mcadams.jpeg",
            "./movie2/actors/xochitl-gomez.jpeg"
        ],
        
    },
    {
        title: "Super Héros Movie",
        infos: [
            {releaseDate: "2008"},
            {during: "1h 15"},
            {gender: "comédie/action"},
            {director: "Craig Mazin"},
            {rating: "1.8/5"}
        ],
        cover: "./movie3/cover/super-heros-movie.jpeg",
        description: "Lycéen timide et mal dans sa peau, Rick Ricker vit avec son oncle et sa tante depuis que ses parents ont été tués. Pendant la visite scolaire d'un laboratoire de recherche, Rick est piqué par une libellule génétiquement modifiée. Peu à peu, alors qu'il voit ses forces se décupler, il comprend qu'il est désormais pourvu de super-pouvoirs. Après s'être fabriqué un costume, il adopte sa nouvelle identité : La Libellule. Mais il lui faudra affronter un redoutable ennemi, le Sablier.",
        actors: [
            "./movie3/actors/christopher-mcdonald.jpeg",
            "./movie3/actors/drake-bell.jpeg",
            "./movie3/actors/kevin-hart.jpeg",
            "./movie3/actors/leslie-nielsen.jpg",
            "./movie3/actors/pamela-anderson.jpg",
            "./movie3/actors/sara-paxton.jpg"
        ],
    },
]

//create main element
const main = document.createElement("main")
document.body.appendChild(main)

//create h1 element
const h1 = document.createElement("h1")
h1.textContent = "Exercice d'intégration d'HTML avec des objets en JavaScript"
main.appendChild(h1)

//loop movie-n 
for(let i = 0; i < movies.length; i++) {
    //div movie
    const divMovie = document.createElement("div")
    divMovie.classList.add(`movie`)
    divMovie.classList.add(`movie-${i + 1}`)
    main.appendChild(divMovie)

        //div presentation
        const divPresentation = document.createElement("div")
        divPresentation.classList.add("presentation")
        divMovie.appendChild(divPresentation)

            //div cover
            const divCover = document.createElement("div")
            divCover.classList.add(`cover`)
            divPresentation.appendChild(divCover)

                //img of cover
                const img = document.createElement("img")
                img.setAttribute("src", movies[i].cover)
                divCover.appendChild(img)

            //div infos movie
            const divInfosMovie = document.createElement("div")
            divInfosMovie.classList.add("infos-movie")
            divPresentation.appendChild(divInfosMovie)
        
                //title of movie
                const h2 = document.createElement("h2")
                h2.textContent = movies[i].title
                divInfosMovie.appendChild(h2)

                //stats movie
                const divStatsMovie = document.createElement("div")
                divStatsMovie.classList.add("stats-movie")
                divInfosMovie.appendChild(divStatsMovie)

                    //loop span stats 
                    for(let j = 0; j < movies[i].infos.length; j++) {
                        const span = document.createElement("span")
                        span.classList.add(Object.keys(movies[i].infos[j]))
                        span.textContent = Object.values(movies[i].infos[j])
                        divStatsMovie.appendChild(span)
                    }

                //para description
                const paraDescription = document.createElement("p")
                paraDescription.classList.add("description")
                paraDescription.textContent = movies[i].description
                divInfosMovie.appendChild(paraDescription)

        //div actors
        const divActors = document.createElement("div")
        divActors.classList.add("actors")
        divMovie.appendChild(divActors)

            //divs actor-n
            for(let k = 0; k < movies[i].actors.length; k++) {
                const divActor = document.createElement("div")
                divActor.classList.add(`actor`)
                divActor.classList.add(`actor-${k + 1}`)
                divActors.appendChild(divActor)
                const img = document.createElement("img")
                img.setAttribute("src", movies[i].actors[k])
                divActor.appendChild(img)
            }
}
