const links = [
    {
        href: "/",
        content: "Home"
    },
    {
        href: "https://google.com",
        content: "Google Me"
    },
    {
        href: "https://facebook.com",
        content: "Facebook Me"
    }
];

const projects = [
    {
        title: "AbovePar",
        imgsrc: "https://picsum.photos/300",
        description: "wfdkfmkdfd",
        link: "https://github.com"
    },
    {
        title: "NovaList",
        imgsrc: "https://picsum.photos/300",
        description: "wfdkfmkdfd",
        link: "https://github.com"
    },
    {
        title: "Johns Upholstery",
        imgsrc: "https://picsum.photos/300",
        description: "wfdkfmkdfd",
        link: "https://github.com"
    },
]

const buildCards = (projects) => projects.map((card) => {
    return`
        <li class='card'>
            <div class='img-container'>
                <a href="${card.link}">
                <img src='${card.imgsrc}' alt="">
                </a>
            </div>
            <h1>${card.title}</h1>
            <p>${card.description}></p>
    `
}).join('')

const buildLinks = (links_) => links_.map((link)=>{
    return `
    <li><a href="${link.href}">${link.content}</a></li>
  `
}).join('');

const linkContainer = document.getElementById('navigation__links');
linkContainer.innerHTML = buildLinks(links)

const footer = document.querySelector(".footer")
footer.innerHTML = buildLinks([...links,{
    href: "https://twitter.com",
    content: "Tweet at me"
}])

const projectsContainer = document.getElementById('projects')
projectsContainer.innerHTML = buildCards(projects)