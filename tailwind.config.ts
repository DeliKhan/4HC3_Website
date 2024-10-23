import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ap-yellow': '#E5C890',
        'ap-sapphire': '#85C1DC',
        'ap-rosewater': '#F2D5CF',
        'ap-flamingo': '#EEBEBE',
        'ap-beige': '#FFFAF3',
        'paint-inner': '#EEE6DD',
        'paint-sidebar': '#E6DBD1',
        'paint-orange' : '#EA9D34',

      },
    },
  },
} satisfies Config;

