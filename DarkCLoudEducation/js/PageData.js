(window.onload = function() {
        function showCategory(category) {
            /*if (!knowledgeData[category]) return;*/
            window.location.href = "Category.aspx?category="+encodeURIComponent(category);
        }

        function toggleAnnouncement() {
            const bar = document.getElementById('announcementBar');
            bar.classList.toggle('collapsed');
        }

        window.addEventListener('scroll', function() {
            const announcementBar = document.getElementById('announcementBar');
            if (announcementBar) {
                if (window.scrollY > 100) {
                    announcementBar.style.top = '20px';
                } else {
                    announcementBar.style.top = '100px';
                }
            }
        });
        window.showCategory = showCategory;
        window.toggleAnnouncement = toggleAnnouncement;
})();