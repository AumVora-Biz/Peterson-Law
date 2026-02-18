import React from 'react';
import { Button } from './Button';

export const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-navy-900 text-center px-6">
            <div className="max-w-md">
                <h1 className="font-serif text-6xl font-bold text-gold-500 mb-6">404</h1>
                <h2 className="text-3xl font-serif text-white mb-4">Page Not Found</h2>
                <p className="text-gray-300 mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Button href="/" variant="primary">
                    Return Home
                </Button>
            </div>
        </div>
    );
};
