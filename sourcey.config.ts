import { defineConfig, godoc } from "sourcey";

export default defineConfig({
  name: "gcache Documentation",
  siteUrl: "https://gcache-docs.netlify.app",
  navigation: {
    tabs: [
      {
        tab: "Go API",
        source: godoc("./gcache"),
      },
    ],
  },
});
