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
