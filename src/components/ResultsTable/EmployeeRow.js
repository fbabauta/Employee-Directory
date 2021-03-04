import React from 'react';
import './style.css';

function EmployeeRow(props) {
    return (
        <tr>
            <td><img src={props.img} alt="employee thumbnail" /></td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    )
};

export default EmployeeRow;