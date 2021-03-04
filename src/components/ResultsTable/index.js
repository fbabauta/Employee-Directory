import React from 'react';
import './style.css';
import EmployeeRow from './EmployeeRow';
import TableHead from './TableHead';
import util from '../../utils/util';

class ResultsTable extends React.Component {

    render() {
        return (
            <div className="uk-container table-container">
                <table className="uk-table uk-table-striped table">
                    <TableHead
                        handleArrowClick={this.props.handleArrowClick}
                        order={this.props.order}
                    />
                    <tbody>
                        {
                            this.props.employees.map(e => {
                                let date = new Date(e.dob.date);
                                let dateStr = date.toLocaleDateString();

                                return <EmployeeRow
                                    key={this.props.employees.indexOf(e)}
                                    img={e.picture.thumbnail}
                                    name={`${e.name.first} ${e.name.last}`}
                                    phone={util.formatPhoneNumber(e.stripPhone)}
                                    email={e.email}
                                    dob={dateStr}
                                />
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};

export default ResultsTable;