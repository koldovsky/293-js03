// 1. Add event listener to all buttons
document.querySelectorAll('nav.tabs button')
  .forEach( el => el.addEventListener('click', switchTab));
  
// 2. Implement event listener so it will do:
function switchTab(ev) {
  // 2.1. Will remove active class from buttons and panels
  document.querySelectorAll('nav.tabs button, div.panels div')
    .forEach( el => el.classList.remove('active'));
  // 2.2. Will add active class to clicked button
  ev.target.classList.add('active');
  const tabNum = ev.target.dataset.tab;
  // 2.3. Will add active class to corresponding panel
  document.querySelectorAll('div.panels div')
    .forEach( panel => {
       if (panel.dataset.tab === tabNum) {
           panel.classList.add('active');
       } 
    });
}