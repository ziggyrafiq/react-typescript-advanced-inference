import React from 'react';

interface AuthExampleProps {
    title: string;
}

const AuthExample: React.FC<AuthExampleProps> = ({ title }) => {
    return <div>This is a protected component: {title}</div>;
};

export default AuthExample;
