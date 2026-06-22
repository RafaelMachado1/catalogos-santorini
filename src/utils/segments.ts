import { segments } from '../data/segments'
import type { CatalogStatus, Segment } from '../types/catalog'

export function sortSegmentsByOrder(segmentList: Segment[]) {
  return [...segmentList].sort((left, right) => left.order - right.order)
}

export function getAllSegments() {
  return sortSegmentsByOrder(segments)
}

export function getSegmentBySlug(slug: string | undefined | null) {
  if (!slug) {
    return undefined
  }

  return segments.find((segment) => segment.slug === slug)
}

export function getSegmentsByStatus(status: CatalogStatus) {
  return getAllSegments().filter((segment) => segment.status === status)
}

export function getAvailableSegments() {
  return getSegmentsByStatus('available')
}
