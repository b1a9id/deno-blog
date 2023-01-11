/** @jsx h */

import blog, {ga, redirects, h} from "blog";

blog({
    title: "Ryosuke's blog",
    description: "This is my blog.",
    // header: <header>Your custom header</header>,
    // section: <section>Your custom section</section>,
    // footer: <footer>Your custom footer</footer>,
    avatar: "avatar.jpg",
    avatarClass: "rounded-full",
    author: "Ryosuke Uchitate",
    links: [
        {title: "GitHub", url: "https://github.com/b1a9id"},
        {title: "Twitter", url: "https://twitter.com/b1a9idps"},
        {title: "SlideShare", url: "https://www.slideshare.net/RyosukeUchitate"},
    ],
    lang: "ja",
    dateStyle: "long",
    theme: "auto",

    middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    redirects({
        // 初めてのTech DayでConcourse CIに入門した
        "/posts/tech-day-concourse-ci": "/2019/01/12/1547254800",
        "/posts/tech-day-concourse-ci/": "/2019/01/12/1547254800",
    }),

    ]
});
