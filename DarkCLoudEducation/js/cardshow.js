(window.onload = function() {
    var count=0;
    var current=0;
    var card = document.getElementsByClassName("knowledge-card");
    function showCard() {
        if(count<card.length)
        {
            card[count].id = "card-show";
            count++;
        }
    }
    function updateButtonVisibility() {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollPosition === 0) {
        } else {
            window.setInterval(showCard, 100);
        }
    }
    updateButtonVisibility();
    function slowlyload()
    {
        window.addEventListener('scroll', updateButtonVisibility);
    }
    window.setInterval(slowlyload, 100);
})();