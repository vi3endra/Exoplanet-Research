AOS.init();
$('document').ready(() => {
    $('.carousel').carousel({
        interval: 1500
    });
    // $('[data-toggle = "popover"]').popover();
    $('#earth').popover({
        html: true,
        trigger: 'hover',
        content: "<div class='text-light'>Earth, our Home, is the third planet from the Sun. It is the only planet to known to have an atmosphere containing free oxygen.Ocenes of liquid water on interface's surface, and of course life. Due to the planet apparent movement of the Sun and planets in relation to their viewpoint, ancient scientists insisted that the Earth remained Static, while other celestial bodies travelled in circular orbits arround it. Eventually, the view that the Sun was at the centre of the universe was postulated by Copernicus.</div>"
    });
    $('#proxima').popover({
        html: true,
        trigger: 'hover',
        content: "<div class='text-light'>Proxima Centauri b, is a planet orbiting the star at a distance of roughly 0.05 AU (7.5 million km) with an orbital period of approximately 11.2 Earth days. Its estimated mass is at least 1.3 times that of the Earth."
    });
    $('#kepler-452').popover({
        html: true,
        trigger: 'hover',
        content: "<div class='text-light'>Kepler-452b has a probable mass five times that of Earth, and its surface gravity is twice Earth's, though calculations of mass for exoplanets are only rough estimates. If it is a terrestrial planet, it is most likely a super-Earth with many active volcanoes due to its higher mass and density."
    });
});