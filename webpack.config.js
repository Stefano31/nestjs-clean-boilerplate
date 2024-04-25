export const module = {
  rules: [
    {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'swc-loader',
        options: require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory().swcOptions
      }
    }
  ]
}
