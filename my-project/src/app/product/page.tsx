import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            {/* <Loading/> */}
            <h1>ON PRODUCT PAGE</h1>
            <Link href='/product/12'>to 12 product</Link>
        </div>

    )
}

export default Page