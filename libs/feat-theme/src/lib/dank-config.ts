export const config = {
  aliases: {
    bg: 'backgroundColor',
    p: 'padding',
    px: 'paddingHorizontal',
    py: 'paddingVertical',
    rounded: 'borderRadius',
    m: 'margin',
    mx: 'marginHorizontal',
    my: 'marginVertical',
    gapX: 'rowGap',
    gapY: 'columnGap',
    flexDir: 'flexDirection',
  },

  tokens: {
    colors: {
      // Primary
      $primary50: '#dff8ff',
      $primary100: '#b9e5f6',
      $primary200: '#92d2ed',
      $primary300: '#69c1e4',
      $primary400: '#43afdc',
      $primary500: '#2d95c3',
      $primary600: '#207498',
      $primary700: '#12536d',
      $primary800: '#033244',
      $primary900: '#00121b',

      // Secondary
      $secondary50: '#fff2da',
      $secondary100: '#ffdcae',
      $secondary200: '#ffc67d',
      $secondary300: '#ffaf4b',
      $secondary400: '#ff981a',
      $secondary500: '#e67e00',
      $secondary600: '#b36200',
      $secondary700: '#814600',
      $secondary800: '#4f2900',
      $secondary900: '#1f0c00',

      // Neutral
      $neutral50: '#ecf2ff',
      $neutral100: '#d0dae3',
      $neutral200: '#b5bfca',
      $neutral300: '#9aa6b2',
      $neutral400: '#7e8c9b',
      $neutral500: '#647381',
      $neutral600: '#4d5965',
      $neutral700: '#36404a',
      $neutral800: '#1d262f',
      $neutral900: '#000f16',
    },

    space: {
      $0: 0,
      '$0.5': 2,
      $1: 4,
      '$1.5': 6,
      $2: 8,
      '$2.5': 12,
      $3: 16,
      '$3.5': 24,
      $4: 32,
      $5: 64,
      $6: 128,
    },

    fontSizes: {
      $xs: 12,
      $sm: 16,
      $md: 24,
      $lg: 32,
      $xl: 64,
    },
  },
} as const;

type ConfigType = typeof config;

declare module '@dank-style/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface ICustomConfig extends ConfigType {}
}

export default config;
