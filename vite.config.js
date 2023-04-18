import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from "@unocss/preset-icons";
import presetWebFonts from "@unocss/preset-web-fonts";

export default {
  plugins: [
    UnoCSS({
      include: ["./index.html", "main.js", "./src/**/**.js"],
      presets: [
        presetUno(),
        presetIcons({}),
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Noto Sans; 500, 700",
            mono: ["Fira Code", "Fira Mono:400,700"],
            // custom ones
            lobster: "Lobster",
            lato: [
              {
                name: "Lato",
                weights: ["400", "700"],
                italic: true,
              },
              {
                name: "sans-serif",
                provider: "none",
              },
            ],
          },
        }),
      ],
      rules: [],
    }),
  ],
};
