module.exports = {
  presets: [
    "next/babel", // Preset do Next.js
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true, // Navegadores modernos vão usar ESModules
        },
        useBuiltIns: "entry", // Usar polyfills conforme necessário
        corejs: 3, // Garantir uso do core-js versão 3
      }
    ]
  ],
  plugins: [
    ["babel-plugin-styled-components", { "ssr": true }],
  ]
};