

//==================page function===============//


    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.getElementById(pageId).classList.add('active');
      document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
      event.currentTarget.classList.add('active');
    }



//==================page function end===============//


