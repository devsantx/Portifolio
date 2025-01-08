const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".bg-gradient-radial": {
                    backgroundImage: "radial-gradient(var(--tw-gradient-stops))",
                },
                ".bg-gradient-conic": {
                    backgroundImage: "conic-gradient(var(--tw-gradient-stops))",
                },
            });
        }),
    ],
};
