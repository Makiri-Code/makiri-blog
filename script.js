// Function to check if window is scrolled and adjust logo size

const checkScroll = () => {
    const navBar = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    let scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(scrollPosition > 20){
        navBar.classList.add('scrolled')
    } else{
        navBar.classList.remove('scrolled')
    }
    // Calculate the new font-size based on scroll position
    let newSize = 3 - (scrollPosition * 0.03)
    // Clamping the font size btwn 3rem and 1.5rem
    newSize = Math.max(1.5, newSize);
    newSize = Math.min(3, newSize);

    logo.style.fontSize = newSize + 'rem';
}

// Event listener for scroll
window.addEventListener('scroll', checkScroll)