document.addEventListener('DOMContentLoaded', () => {
    const technologies = [
        "Python", "HTML", "CSS", "JavaScript", "Flask", "NPM", "ReactJS", "NextJS",
        "MySQL", "Docker", "Git", "Arch", "Blender", "Jupyter", "Poetry", "SQLite",
        "TailwindCSS"
    ];
    const slideshowTrack1 = document.querySelector('.slideshow-track.track-1');
    const slideshowTrack2 = document.querySelector('.slideshow-track.track-2');

    function createTechItem(techName) {
        const svgFileName = techName.toLowerCase().replace(' ', '-') + '.svg';
        const iconPath = `static/logos/${svgFileName}`;
        return `<div class='tech-item'>
            <img src="${iconPath}" alt="${techName} Logo">
            <span>${techName}</span>
        </div>`;
    }

    // Divide technologies into two rows
    const half = Math.ceil(technologies.length / 2);
    const technologies1 = technologies.slice(0, half);
    const technologies2 = technologies.slice(half);

    // Add technologies to the first track
    slideshow1html = technologies1.reduce((out, item) => {
        return out + createTechItem(item);
    }, "");

    // Add technologies to the second track
    slideshow2html = technologies2.reduce((out, item) => {
        return out + createTechItem(item);
    }, "");

    slideshowTrack1.innerHTML = slideshow1html + slideshow1html;
    slideshowTrack2.innerHTML = slideshow2html + slideshow2html;
});
