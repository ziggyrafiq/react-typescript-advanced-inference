import React from 'react';
import './Alert.css';  

type AlertProps = {
    message: string;
    type?: "success" | "error";
};

const Alert = ({ message, type = "success" }: AlertProps) => {
    return <div className={`alert ${type}`}>{message}</div>;
};

export default Alert;