// Simple animation/interaction (sans dépendances)
    const toast = document.getElementById('lucToast');
    const toastText = document.getElementById('lucToastText');
    const closeBtn = document.getElementById('lucToastClose');
    const cta = document.getElementById('lucCta');
    const more = document.getElementById('lucMore');

    function showToast(message){
      toastText.textContent = message;
      toast.classList.add('show');
      window.clearTimeout(showToast._t);
      showToast._t = window.setTimeout(()=> toast.classList.remove('show'), 4200);
    }

    closeBtn.addEventListener('click', () => toast.classList.remove('show'));
    window.addEventListener('load', () => {
      showToast("Nouveau chez Level Up Creation : un designer graphique rejoint l’équipe.");
    });