export type ThemeMode = 'light' | 'dark'

export type ThemeId = string

export type ThemeDefinition = {
  id: ThemeId
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
  surface: string
  surfaceAlt: string
  text: string
  muted: string
  gradient: string
  glow: string
  particle: string
  shadow: string
  border: string
}
