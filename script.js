document.querySelector(".union").addEventListener("click", () => {
  document.querySelector(".hamburger").style.display = "flex";
});

document.querySelector("#xicon").addEventListener("click", () => {
  document.querySelector(".hamburger").style.display = "none";
});

document.querySelectorAll(".hamburger a").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelector(".hamburger").style.display = "none";
  });
});

window.onresize = () => {
  if (window.innerWidth > 992) {
    document.querySelector(".hamburger").style.display = "none";
  }
};

const seeProject = [
  {
    id: "1",
    title: "Profesional Art Printing Data",
    description:
      "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    image: "./images/secondpage/Icon.svg",
    live: "#",
    github: "#",
  },
  {
    id: "2",
    title: "Profesional Art Printing Data",
    description:
      "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    image: "./images/secondpage/Icon.svg",
    live: "#",
    github: "#",
  },
  {
    id: "3",
    title: "Profesional Art Printing Data",
    description:
      "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    image: "./images/secondpage/Icon.svg",
    live: "#",
    github: "#",
  },
  {
    id: "4",
    title: "Profesional Art Printing Data",
    description:
      "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    image: "./images/secondpage/Icon.svg",
    live: "#",
    github: "#",
  },
  {
    id: "5",
    title: "Profesional Art Printing Data",
    description:
      "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    image: "./images/secondpage/Icon.svg",
    live: "#",
    github: "#",
  },
  {
    id: "6",
    title: "Profesional Art Printing Data",
    description:
      "  A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    technologies: ["html", "Bootstrap", "Ruby on rails"],
    image: "./images/secondpage/Icon.svg",
    live: "#",
    github: "#",
  },
];

for (let i = 0; i < seeProject.length; i++) {
  document.querySelector("#worksection").innerHTML += `
<div class="last-part">
<h3 class="professional">${seeProject[i].title}</h3>
<p class="selection">
  ${seeProject[i].description}
</p>
<ul class="groupbtn">
  
 ${seeProject[i].technologies
   .map((x) => `<li><button class="probtn" type="submit">${x}</button></li>`)
   .join("")} 
</ul>
<button class="lgbtn" id="project-${seeProject[i].id}">See Project</button>
</div>
`;
}

// popup
document.querySelectorAll(".lgbtn").forEach((x) => {
  x.addEventListener("click", () => {
    const id = x.id.split("-")[1];
    const curProject = seeProject.find((p) => p.id === id);
    document.querySelector(".pop-up h1").innerText = curProject.title;
    document.querySelector(".pop-up img").setAttribute("src", curProject.image);
    document.querySelector(".top-buttons").innerHTML = curProject.technologies
      .map((x) => `<li><button class="topbtns">${x}</button></li>`)
      .join("");
    document.querySelector(".pop-up p").innerText = curProject.description;
    document.querySelector("#live").setAttribute("href", curProject.live);
    document
      .querySelector("#githublink")
      .setAttribute("href", curProject.github);

    // show popup
    document.querySelector(".backdrop").style.display = "block";
  });
});
// hide the popup on x click
document.querySelector(".close-icon").addEventListener("click", () => {
  document.querySelector(".backdrop").style.display = "none";
});
