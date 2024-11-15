'use client'

import { useState } from "react";

export default function Loading() {
    const [Loading, _] = useState(true)
    if (!Loading) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className="flex flex-col items-center space-y-4">
                    <div className="lds-roller">
                        <div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div>
                    </div>
                </div>
            </div>
        );
    }

}