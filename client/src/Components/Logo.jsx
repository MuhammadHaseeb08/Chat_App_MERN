import React from 'react'

const Logo = () => {
  return (
    <div><div className="bg-green-500 text-white py-4">
    <div className="container mx-auto flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      <h1 className="text-2xl font-bold">ChatHub</h1>
    </div>
  </div>
  </div>
  )
}

export default Logo