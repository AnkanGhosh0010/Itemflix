const nav = document.getElementById('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 100) {
                nav.classList.add('nav__black');
            } else {
                nav.classList.remove('nav__black');
            }
        });

        const shareButton = document.getElementById('shareButton');
        shareButton.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: 'ITEMFLIX',
                    url: window.location.href
                }).then(() => {
                    console.log('Thanks for sharing!');
                }).catch(console.error);
            } else {
                alert('Sharing is not supported on this browser.');
            }
        });

        document.querySelectorAll('.auto-reload-link').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                window.open(link.href, '_blank');
                window.location.reload();
            });
        });