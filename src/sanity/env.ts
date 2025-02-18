export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-03'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "skYidbOtzgo7QG1TWptyxzWnJXR5PwM1BrxYVm3YCTwZ4pJsWr7cK6AKbcXRmEAMm5hxouIrU3dVHBB6zSeK1I5IhvVuU2U0ssEidPvfBNPx0sdkvPLVCp1DjINSs8xvzedtV0IYohgayj5q71Hd53dpO0g9qgyVMrqszzR5SnuhII3S2lml",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
