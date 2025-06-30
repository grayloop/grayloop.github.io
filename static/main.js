let titleBg = $(".title-background");

setup_navbar(() => titleBg.outerHeight());

async function changeFieldSpecifierText() {
    const greetings = ["Backend Dev", "Japanese Learner", "Indian Student"];
    let elem = document.getElementById("field-specifier-changing");
    var i = 1;
    var curtext = '';
    while (true) {
        await sleep(2000);
        while (elem.innerText.length > 0) {
            elem.innerText = elem.innerText.slice(0, elem.innerText.length-1);
            await sleep(100);
        }

        curtext = '';

        for (const c of greetings[i]) {
            curtext += c;
            elem.innerText = curtext;
            if (c !== ' ') {
                await sleep(100);
            }
        }
        

        i++;
        if (i >= greetings.length) {
            i = 0;
        }
    }
}

changeFieldSpecifierText();
setupScrollShow();
setupBorderView();
setupNavbarScrollEffect();

// Add blur and fade-in transition to the title on page load
$(document).ready(function() {
    setTimeout(function() {
        $('.title').removeClass('initial-hidden').addClass('title-loaded');
    }, 100); // Small delay to ensure CSS is applied before transition

    // Setup parallax for the image
    setupParallaxImage();
});

function setupNavbarScrollEffect() {
    const navbar = $('.navbar');
    const scrollThreshold = 200; // Adjust this value as needed

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > scrollThreshold) {
            navbar.addClass('navbar-hidden');
        } else {
            navbar.removeClass('navbar-hidden');
        }
    });
}

function setupParallaxImage() {
    const picImg = $('.pic-img');
    const speed = 0.4; // Adjust this value for more or less parallax effect
    const scrollThreshold = 390

    function onScrollParallax() {
        const scrolled = $(this).scrollTop();
        if (scrolled < scrollThreshold) {
            picImg.css('transform', 'translateY(' + -(scrolled * speed) + 'px)');
        } else {
            picImg.css('transform', 'translateY(' + -(scrollThreshold * speed) + 'px)');
        }
    }

    $(window).on('scroll', onScrollParallax);
    onScrollParallax();
}
