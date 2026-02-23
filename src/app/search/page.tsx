import type { Metadata } from 'next'
import { Suspense } from 'react'
import SearchResultsClient from '@/components/SearchResultsClient'

export const metadata: Metadata = { title: 'Search Results' }

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <SearchResultsClient />
    </Suspense>
  )
}
