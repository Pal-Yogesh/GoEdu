/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "custom-gradient": 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(171, 171, 171, 0.06) 100%)',
      },
    },
    fontFamily:{
      prociono:["Prociono"]
      // poppins: ["Poppins"]
    },
  },
  plugins: [],
};
