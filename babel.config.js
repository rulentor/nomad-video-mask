// @generated: @expo/next-adapter@2.1.5
// Learn more: https://github.com/expo/expo/blob/master/docs/pages/versions/unversioned/guides/using-nextjs.md#shared-steps

module.exports = {
  presets: [
    '@expo/next-adapter/babel',
	[
      "next/babel",
      {
        "styled-jsx": {
          "plugins": ["@styled-jsx/plugin-sass"]
        }
      }
    ]
  ],
  plugins: ['@babel/plugin-proposal-class-properties']
}
