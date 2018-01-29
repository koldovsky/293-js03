// 1. Add event listener to all buttons
/* global $ */
$('nav.tabs button').click(switchTab);  

// 2. Implement event listener so it will do:
function switchTab(ev) {
  // 2.1. Will remove active class from buttons and panels
  $('nav.tabs button, div.panels div').removeClass('active');    
  // 2.2. Will add active class to clicked button
  $(this).addClass('active');
  const tabNum = ev.target.dataset.tab;
  // 2.3. Will add active class to corresponding panel
  $('div.panels div').each((_, panel) => {
       if (panel.dataset.tab === tabNum ) {
           panel.classList.add('active');
       }
  });
}