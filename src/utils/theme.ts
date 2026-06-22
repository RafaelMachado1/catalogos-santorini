import { homeTheme, themeMap, themes } from '../data/themes'
import { segments } from '../data/segments'
import type { ThemeDefinition, ThemeId } from '../types/theme'

export function getThemeById(themeId: ThemeId | undefined | null): ThemeDefinition {
  if (!themeId) {
    return homeTheme
  }

  return themeMap[themeId] ?? homeTheme
}

export function getSegmentTheme(segmentSlug: string | undefined | null): ThemeDefinition {
  const segment = segments.find((item) => item.slug === segmentSlug)
  return getThemeById(segment?.themeId)
}

export function getThemeCssVariables(theme: ThemeDefinition) {
  return {
    '--theme-active-id': theme.id,
    '--theme-active-name': theme.name,
    '--theme-active-primary': theme.primary,
    '--theme-active-secondary': theme.secondary,
    '--theme-active-accent': theme.accent,
    '--theme-active-background': theme.background,
    '--theme-active-surface': theme.surface,
    '--theme-active-surface-alt': theme.surfaceAlt,
    '--theme-active-text': theme.text,
    '--theme-active-muted': theme.muted,
    '--theme-active-gradient': theme.gradient,
    '--theme-active-glow': theme.glow,
    '--theme-active-particle': theme.particle,
    '--theme-active-shadow': theme.shadow,
    '--theme-active-border': theme.border,
  } as const
}

export function applyThemeToDocument(theme: ThemeDefinition) {
  if (typeof document === 'undefined') {
    return
  }

  const root = document.documentElement
  const themeVariables = getThemeCssVariables(theme)

  root.dataset.theme = theme.id

  for (const [variable, value] of Object.entries(themeVariables)) {
    root.style.setProperty(variable, value)
  }
}

export { themes }
