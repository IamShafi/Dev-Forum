import React from 'react'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const page = () => {
  return (
    <div className='text-3xl font-bold'>
      implemeted webhook endpoin
    <SignedOut>
      <a href="/sign-in">   Sign in</a>
    </SignedOut>
    <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#5D63AF",
              },
            }}
          />
        </SignedIn>
    </div>
  )
}

export default page
