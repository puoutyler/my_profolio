const links = [
    {
        href: "/",
        content: "Home"
    },
    {
        href: "https://github.com/puoutyler",
        content: "GitHub"
    },
    {
        href: "https://www.linkedin.com/in/tyler-puou/",
        content: "LinkedIn"
    }
];

const projects = [
    {
        title: "Johns Upholstery",
        imgsrc: "https://miro.medium.com/max/1400/1*bOv2fc40SrPUwIwSmO4doQ.png",
        description: "Freelance project made for a company based in Hawaii, built using React with an Express backend. Fully designed and tailored to the customers request.",
        link: "https://johnsupholsteryhawaii.netlify.app/"
    },
    {
        title: "NovaList",
        imgsrc: "https://miro.medium.com/max/1400/1*N3zJeUF_OibMGJpZV7En5g.png",
        description: "An app built along side my teammates Cody Tyler and Tom Walker using a MERN stack and having CRUD capabilities. Utilizing Sass, GitHub, and Google books api for searching new books.",
        link: "https://novalist.netlify.app/"
    },
    {
        title: "AbovePar",
        imgsrc: "https://miro.medium.com/max/1400/1*OZC4bGdYMTJPH31wdMkNRQ.png",
        description: "Built using Javascript, HTML, CSS, React, Node.js, and Express. Utilizing tools like Github, Vscode, and hosted on heroku. In addition added authorization using password protection with Brcrypt and Express-sessions.",
        link: "https://tylerpuou-project-2.herokuapp.com/abovepar/"
    },
    {
        title: 'Wheel of Fortune',
        imgsrc: 'https://miro.medium.com/max/1400/1*dJ3WedoaXgvV0liCtcPw3A.png',
        description: 'Game built around the classic Wheel of Fortune theme using only Javascript, HTML, and CSS. Spin the wheel, guess a letter, and solve that puzzle for big prizes!',
        link: 'https://puoutyler.github.io/puoutylerproject1/'
    }
]

const buildCards = (projects) => projects.map((card) => {
    return`
        <li class='card'>
            <div class='img-container'>
                <a href="${card.link}">
                <img class= 'card-img' src='${card.imgsrc}' alt="">
                </a>
            </div>
            <h1>${card.title}</h1>
            <p>${card.description}</p>
    `
}).join('')

const buildLinks = (links_) => links_.map((link)=>{
    return `
    <li><a href="${link.href}">${link.content}</a></li>
  `
}).join('');

const linkContainer = document.getElementById('navigation__links');
linkContainer.innerHTML = buildLinks(links)

const projectsContainer = document.getElementById('projects')
projectsContainer.innerHTML = buildCards(projects)