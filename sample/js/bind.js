




document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'login') {
    
    page.querySelector('#register').onclick = function() {
      
      document.querySelector('#myNavigator').pushPage('registration.html', {data: {title: 'Register Page'}});
    };
  } else if (page.id === 'register') {
    
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }

  
  
  
  
  
  
});



