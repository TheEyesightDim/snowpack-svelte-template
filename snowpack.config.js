// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

//The following comment helps Typescript's type system
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-webpack"],
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
