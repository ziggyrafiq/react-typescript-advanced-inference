
import React from 'react';

function withAuth<P extends object>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        
        const isAuthenticated = true; 


        if (!isAuthenticated) {
            return <div>You need to log in to view this content.</div>;
        }

        
        return <WrappedComponent {...props} />;
    };
}

export default withAuth;
