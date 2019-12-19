'use strict';

// 1. Inside a JavaScript file, called`hijackGoogleLogo.js`, create a function called hijackGoogleLogo
function hijackGoogleLogo() {
  let hyf = 'https://www.hackyourfuture.dk/static/logo-dark.svg';
  // 2. Find out how to select the element that contains the Google logo, and store it in a variable
  let logo = document.getElementById('hplogo');
  // 3. Modify the source and sourceset of the logo so that it's replaced by the HackYourFuture logo instead
  logo.srcset = hyf;
}
hijackGoogleLogo();