import React from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
    return (
        <Navigate to="/" replace />
    );
};

export default NotFound;