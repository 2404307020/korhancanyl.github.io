// Welcome modal controller: shows on first visit and remembers dismissal
(function(){
  const KEY = 'welcomeDismissed';
  function showModal(){
    const modal = document.getElementById('welcomeModal');
    if(!modal) return;
    modal.style.display = 'flex';
    // focus for accessibility
    const btn = document.getElementById('closeWelcome');
    if(btn) btn.focus();
  }

  function hideModal(){
    const modal = document.getElementById('welcomeModal');
    if(!modal) return;
    modal.style.display = 'none';
  }

  document.addEventListener('DOMContentLoaded', function(){
    try{
      const dismissed = localStorage.getItem(KEY);
      if(!dismissed){
        showModal();
      }

      const close = document.getElementById('closeWelcome');
      if(close) close.addEventListener('click', function(){
        const dont = document.getElementById('dontShow');
        if(dont && dont.checked){
          localStorage.setItem(KEY, '1');
        }
        hideModal();
      });
    }catch(e){
      // ignore storage errors
    }
  });
})();
