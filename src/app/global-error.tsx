'use client'

import { Button } from "@/components/ui/button"

 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="text-2xl font-bold">Something went wrong!</div>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  )
}