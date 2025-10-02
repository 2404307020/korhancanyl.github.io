// welcome.js - controls the full-screen welcome splash
(() => {
  const AUTO_TIMEOUT = 2200; // ms until auto-dismiss

  function createAndShowSplash() {
    const modal = document.getElementById('welcomeModal');
    if (!modal) return;

    // make it fullscreen appearance
    modal.classList.add('fullscreen');
    modal.style.display = 'flex';

    // auto-dismiss after timeout with fade-out, then remove from DOM
    setTimeout(() => {
      modal.classList.add('fade-out');
      // after animation ends, remove element to fully clean up
      setTimeout(() => {
        if (modal.parentNode) modal.parentNode.removeChild(modal);
      }, 600); // match fade-out animation duration
    }, AUTO_TIMEOUT);
  }

  // If DOM already loaded
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    createAndShowSplash();
  } else {
    window.addEventListener('DOMContentLoaded', createAndShowSplash);
  }

})();
// Welcome modal controller: shows on first visit and remembers dismissal
(function(){
  // Full-screen welcome splash that auto-dismisses and is removed from the DOM.
  const AUTO_TIMEOUT = 2200; // ms

  function showSplash(){
    const modal = document.getElementById('welcomeModal');
    if(!modal) return;
    modal.style.display = 'flex';
    // after timeout, fade out and remove
    setTimeout(()=>{
      modal.classList.add('fade-out');
      // remove after animation (match CSS animation-duration)
      setTimeout(()=>{
        if(modal && modal.parentNode) modal.parentNode.removeChild(modal);
      }, 600);
    }, AUTO_TIMEOUT);
  }

  document.addEventListener('DOMContentLoaded', function(){
    try{
      showSplash();
      // also allow manual close if the button exists
      const close = document.getElementById('closeWelcome');
      if(close) close.addEventListener('click', function(){
        const modal = document.getElementById('welcomeModal');
        if(!modal) return;
        modal.classList.add('fade-out');
        setTimeout(()=>{ if(modal && modal.parentNode) modal.parentNode.removeChild(modal); }, 600);
      });
    }catch(e){
      // ignore
    }
  });
})();
