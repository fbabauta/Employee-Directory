import React from 'react';
import './style.css';

function SearchForm(props) {
    return (
        <div className="uk-container form-container">
            <form>
                <div className="uk-margin">
                    <label>Filter Employee by Name:</label><br />
                    <input
                        onChange={props.handleInputChange}
                        className="input-box uk-input uk-form-width-medium" type="text"
                        placeholder="Search"
                    />
                </div>
            </form>
        </div>
    )
};

export default SearchForm;