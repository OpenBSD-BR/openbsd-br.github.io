document.addEventListener('DOMContentLoaded', () => {
    // Initialize the menu
    const menu = document.getElementById('menu');
    const origOffsetY = menu.offsetTop;

    // Function to handle scroll event
    function onScroll() {
        if (window.scrollY >= origOffsetY) {
            menu.classList.add('navbar-fixed-top', 'menu-fixed-style');
        } else {
            menu.classList.remove('navbar-fixed-top', 'menu-fixed-style');
        }
    }

    // Attach the scroll event listener
    document.addEventListener('scroll', onScroll);

    // Initialize Google Analytics
    initGoogleAnalytics('UA-76214150-1');

    // Load Twitter widget
    loadTwitterWidget('twitter-wjs');
});

// Function to initialize Google Analytics
function initGoogleAnalytics(trackingId) {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments);
        }, i[r].l = 1 * new Date();
        a = s.createElement(o);
        m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', trackingId, 'auto');
    ga('send', 'pageview');
}

// Function to load Twitter widget
function loadTwitterWidget(widgetId) {
    window.twttr = (function (d, s, id) {
        let js, fjs = d.getElementsByTagName(s)[0],
            t = window.twttr || {};
        if (d.getElementById(id)) return t;
        js = d.createElement(s);
        js.id = id;
        js.src = "https://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs);

        t._e = [];
        t.ready = function (f) {
            t._e.push(f);
        };

        return t;
    }(document, "script", widgetId));
}
