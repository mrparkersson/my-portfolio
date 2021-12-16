document.querySelector('.union').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'flex';
});

document.querySelector('#xicon').addEventListener('click', () => {
  document.querySelector('.hamburger').style.display = 'none';
});

document.querySelectorAll('.hamburger a').forEach((e) => {
  e.addEventListener('click', () => {
    document.querySelector('.hamburger').style.display = 'none';
  });
});

window.onresize = () => {
  if (window.innerWidth > 992) {
    document.querySelector('.hamburger').style.display = 'none';
  }
};

const seeProject = [
  {
    id: '1',
    title: 'Profesional Art Printing Data',
    description:
      '  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/secondpage/Icon.svg',
    live: '#',
    github: '#',
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    id: '2',
    title: 'Profesional Art Printing Data',
    description:
      '  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/secondpage/Icon.svg',
    live: '#',
    github: '#',
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    id: '3',
    title: 'Profesional Art Printing Data',
    description:
      '  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/secondpage/Icon.svg',
    live: '#',
    github: '#',
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    id: '4',
    title: 'Profesional Art Printing Data',
    description:
      '  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/secondpage/Icon.svg',
    live: '#',
    github: '#',
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    id: '5',
    title: 'Profesional Art Printing Data',
    description:
      '  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/secondpage/Icon.svg',
    live: '#',
    github: '#',
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
  {
    id: '6',
    title: 'Profesional Art Printing Data',
    description:
      '  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    image: './images/secondpage/Icon.svg',
    live: '#',
    github: '#',
    statement:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
  },
];

function list(v) {
  return v.map((x) => `<li><button class='probtn'>${x}</button></li>`).join('');
}

for (let i = 0; i < seeProject.length; i += 1) {
  document.querySelector('#worksection').innerHTML += `
  <div class='last-part'>
    <h3 class='professional'>${seeProject[i].title}</h3>
    <p class='selection'>
      ${seeProject[i].description}
    </p>
    <ul class='groupbtn'>${list(seeProject[i].technologies)}</ul>
    <button class='lgbtn' id='project-${seeProject[i].id}'>See Project</button>
  </div>`;
}

// popup
document.querySelectorAll('.lgbtn').forEach((x) => {
  x.addEventListener('click', () => {
    const id = x.id.split('-')[1];
    const curProject = seeProject.find((p) => p.id === id);
    document.querySelector('.pop-up h1').innerText = curProject.title;
    document.querySelector('.pop-up img').setAttribute('src', curProject.image);
    document.querySelector('.top-buttons').innerHTML = curProject.technologies
      .map((x) => `<li><button class='topbtns'>${x}</button></li>`)
      .join('');
    document.querySelector('.pop-up p').innerText = curProject.statement;
    document.querySelector('#live').setAttribute('href', curProject.live);
    document
      .querySelector('#githublink')
      .setAttribute('href', curProject.github);

    // show popup
    document.querySelector('.backdrop').style.display = 'block';
  });
});

// hide the popup on x click
document.querySelector('.close-icon').addEventListener('click', () => {
  document.querySelector('.backdrop').style.display = 'none';
});

document.querySelector('#seeprobtn').addEventListener('click', () => {
  document.querySelector('.backdrop').style.display = 'grid';
});

// validate email

function validateEmail() {
  const email = document.getElementById('email');
  
  const span = document.getElementById('emailText');

  email.onkeydown = () => {
    const regex = /^([a-zA-Z0-9]+)@([a-zA-Z]+)([a-zA-Z]){2,8}$/;
    const regex2 = /^([a-zA-Z0-9]+)@([a-zA-Z]+)([a-zA-Z]){2,3}[a-zA-Z]{1,3}$/;
    if (regex.test(email.value) || regex2.test(email.value)) {
      span.innerText = 'Your email is valid';
      span.style.color = 'lime';
    } else {
      span.innerText = 'Your email is not valid';
      span.style.color = 'red';
    }
  };
}

document.querySelector('form').addEventListener('click', () => {
  validateEmail();
});
