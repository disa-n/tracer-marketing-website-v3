"use client"

import { useEffect } from 'react';

const policies = {
    'terms-of-service': '8c92c763-d155-4f7d-8b15-c29471a317fa',
    privacy: '91916769-bf31-4659-a1bb-85dda02ebdfb',
    'cookie-policy': 'e0fa4419-df7d-460b-91c8-b26fd1a4d0a6',
};

const Policies = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://app.termly.io/embed-policy.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="min-h-screen w-full bg-[#FCFCFC] px-4 py-16 md:px-8">
            <div className="mx-auto max-w-[1200px]">
                <h1 className="font-chakra-petch text-3xl font-bold md:text-5xl mb-8">
                    Terms & Policies
                </h1>
                <div className="grid gap-8">
                    <div
                        data-id={policies['terms-of-service']}
                        data-type="iframe"
                    />
                    <div
                        data-id={policies['privacy']}
                        data-type="iframe"
                    />
                    <div
                        data-id={policies['cookie-policy']}
                        data-type="iframe"
                    />
                </div>
            </div>
        </div>
    );
};

export default Policies;
