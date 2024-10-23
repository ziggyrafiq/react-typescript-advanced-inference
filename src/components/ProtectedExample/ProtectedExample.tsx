import React from 'react';
import withAuth from '../../hocs/withAuth';  
import AuthExample from '../AuthExample/AuthExample'; 

// Create a protected component using the HOC
const ProtectedExample = withAuth(AuthExample);

export default ProtectedExample;