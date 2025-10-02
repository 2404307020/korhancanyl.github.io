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
