const colors = require('tailwindcss/colors')
// tailwind.config.js
module.exports = {
    purge: [
        '.*.html'
    ],
    darkMode: false,
    theme: {
        fontFamily: {
            'main': ['Raleway', 'sans-serif']
        },
        colors: {
            primary : {
                from : "var(--primary-gradient-from)",
                to: "var(--primary-gradient-to)"
            },
            blue:{
                pale: "var(--pale-blue)",
                grayish: "var(--grayish-blue)",
                dark: "var(--dark-blue)",
                darkest : "var(--very-dark-blue)"
            },
            white : colors.white
        },
        backgroundImage: theme => ({
            'desktop': "url('../images/bg-desktop.png')",
            'mobile': "url('../images/bg-mobile.png')"
        })
    },
    variants: {},
    plugins: [],
}