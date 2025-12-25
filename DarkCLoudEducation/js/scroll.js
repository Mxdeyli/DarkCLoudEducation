window.onload = function() {
    var bottomBtn = document.getElementById('btn-down');

    if (!bottomBtn) return;

    function updateButtonVisibility() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollPosition === 0) {
            bottomBtn.className = "btn-show";
        } else {
            bottomBtn.className = "btn-hide";
        }
    }

    updateButtonVisibility();
    window.addEventListener('scroll', updateButtonVisibility);

    function scrollToBottom() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    bottomBtn.addEventListener('click', scrollToBottom);
}