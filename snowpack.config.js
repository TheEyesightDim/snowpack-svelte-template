// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

//The following comment helps Typescript's type system
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/public-build",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-svelte"],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
