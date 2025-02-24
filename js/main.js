document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });

    // hover effect for links and buttons
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            follower.style.transform = 'scale(1.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    });

    // Theme switching
    const themeSwitch = document.querySelector('.theme-switch');
    const body = document.body;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.setAttribute('data-theme', savedTheme);
        themeSwitch.checked = savedTheme === 'professional';
    }

    themeSwitch.addEventListener('change', (e) => {
        if (e.target.checked) {
            body.setAttribute('data-theme', 'professional');
            localStorage.setItem('theme', 'professional');
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'creative');
        }
    });
}); 