import React from 'react'

export default function Loader({ theme }: { theme: string }) {
  return (<>
    <div className={`w-screen h-screen flex justify-center items-center ${theme === 'dark' ? 'bg-primary' : 'bg-gray'}`}>
      <div className="loader"></div>
    </div>
  </>
  )
}
