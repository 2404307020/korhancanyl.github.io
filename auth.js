// Basit demo kimlik doğrulama (client-side only). Gerçek projelerde sunucu doğrulaması kullanın.
(function(){
  const demoUsers = {
    // öğrenciNo: şifre
    '1001': {name: 'Ali Veli', grade: '4-A'},
    '1002': {name: 'Ayşe Yılmaz', grade: '3-B'},
  };

  function onLoginSubmit(e){
    e.preventDefault();
    const id = (document.getElementById('studentId') || {}).value;
    const pwd = (document.getElementById('password') || {}).value;
    // Demo: şifre olarak 'password' bekliyoruz.
    if(demoUsers[id] && pwd === 'password'){
      // Oturumu localStorage'a kaydet
      localStorage.setItem('studentAuth', JSON.stringify({id:id, name: demoUsers[id].name}));
      window.location.href = 'student-dashboard.html';
    } else {
      alert('Giriş başarısız. Örnek kullanıcılar: 1001 / password veya 1002 / password');
    }
  }

  function initLogin(){
    const form = document.getElementById('loginForm');
    if(form) form.addEventListener('submit', onLoginSubmit);
  }

  function initDashboard(){
    const wd = document.getElementById('welcome');
    const info = document.getElementById('studentInfo');
    const logout = document.getElementById('logoutLink');
    const auth = JSON.parse(localStorage.getItem('studentAuth') || 'null');
    if(!auth){
      // yönlendir
      window.location.href = 'login.html';
      return;
    }
    if(wd) wd.textContent = auth.name + ' hoş geldiniz!';
    if(info) info.textContent = 'Öğrenci No: ' + auth.id;
    if(logout) logout.addEventListener('click', function(e){
      e.preventDefault();
      localStorage.removeItem('studentAuth');
      window.location.href = 'index.html';
    });
  }

  // auto init
  document.addEventListener('DOMContentLoaded', function(){
    initLogin();
    initDashboard();
  });
})();
