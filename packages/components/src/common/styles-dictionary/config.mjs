const config = {
  platforms: {
    css: {
      buildPath: "src/common/styles-dictionary/css/",
      files: [
        {
          destination: "variables.css",
          format: "sds/css",
        },
      ],
      options: {
        showFileHeader: false,
      },
      transformGroup: "css",
    },
    js: {
      buildPath: "src/common/styles-dictionary/json/",
      files: [
        {
          destination: "tailwind.json",
          format: "sds/tailwind",
          options: {
            prefix: "sds",
          },
        },
      ],
      options: {
        showFileHeader: false,
      },
      transformGroup: "js",
    },
    scss: {
      buildPath: "src/common/styles-dictionary/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "sds/scss",
        },
      ],
      options: {
        showFileHeader: false,
      },
      transformGroup: "scss",
    },
  },
  source: ["src/common/styles-dictionary/design-tokens/*.json"],
};

export default config;
