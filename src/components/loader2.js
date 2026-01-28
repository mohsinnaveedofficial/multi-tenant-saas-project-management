import React from 'react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Spinner } from '@/components/ui/spinner'


function Loader2() {
  return (
 <div className="fixed inset-0 z-50 w-full flex items-center justify-center  font-sans bg-gradient-to-br from-blue-200 via-white to-purple-200 ">
    <Empty className="bg-transparent w-auto ">
      <EmptyHeader>
        <EmptyMedia variant="icon" className={"dark:bg-gray-300 dark:text-black"}>
          <Spinner />
        </EmptyMedia>
        <EmptyTitle className={"dark:text-black"}>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" className={"dark:text-black dark:bg-white"} size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
    </div>
  )
}

export default Loader2