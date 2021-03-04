/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './style.css';

function TableHead(props) {
    let icon, nameIcon, phoneIcon, emailIcon, dobIcon;

    if (props.order.direction === "ascending") {
        icon = "chevron-up"
    } else {
        icon = "chevron-down"
    };

    switch (props.order.category) {
        case "name":
            nameIcon = icon
            break;
        case "email":
            emailIcon = icon
            break;
        case "stripPhone":
            phoneIcon = icon
            break;
        case "dob":
            dobIcon = icon
            break;
        default:
            nameIcon = icon
    };

    return (
        <thead className="table-head">
            <tr>
                <th></th>
                <th onClick={() => props.handleArrowClick("name", "first")}>
                    <a>Name</a>
                    <span className="icon" uk-icon={nameIcon} />
                </th>
                <th onClick={() => props.handleArrowClick("stripPhone")}>
                    <a>Phone</a>
                    <span className="icon" uk-icon={phoneIcon} />
                </th>
                <th onClick={() => props.handleArrowClick("email")}>
                    <a>Email</a>
                    <span className="icon" uk-icon={emailIcon} />
                </th>
                <th onClick={() => props.handleArrowClick("dob", "date")}>
                    <a>DOB</a>
                    <span className="icon" uk-icon={dobIcon} />
                </th>
            </tr>
        </thead>
    )
};

export default TableHead;