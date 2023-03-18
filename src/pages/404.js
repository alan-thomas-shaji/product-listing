import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFoundPage = () => {

    const router = useRouter()

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },3000)
    },[]);

  return (
    <div>404 - Not Found. Redirecting you to home page....</div>
  )
}

export default NotFoundPage