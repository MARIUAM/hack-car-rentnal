export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-13'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
),
SANITY_API_TOKEN="skdvOAWPoTL6DsRffrrl2qVhKRhSoLGXcd17fWx0h2myWvZO07XWp8OJUPc0IqXfviL8ZfOZibahW8TjuhNqJnmNPBYESbTgmVdiLSvF5VVcYagAoMcjl4okmQQISpE8mTIok5ZPNsI7z64EWUDIVKdh7MCqQ9qngBtuWxLBnbTZFeIL9ISz"



function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
