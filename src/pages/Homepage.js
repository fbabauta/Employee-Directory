import React from "react";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";
import ResultsTable from "../components/ResultsTable";
import API from "../utils/API";
import Footer from "../components/Footer";
import util from "../utils/util";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resultsAll: [],
            resultsFiltered: [],
            order: {
                direction: "ascending",
                category: "name"
            }
        };

        this.handleArrowClick = this.handleArrowClick.bind(this);
    };

    componentDidMount() {
        this.getEmployees();
    };

    getEmployees = () => {
        API.getEmployees()
            .then(res => {
                this.setState({ resultsAll: util.sortAsc(res.data.results, "name", "first") });
                this.setState({ resultsFiltered: this.addStrippedNum(this.state.resultsAll) });
            })
            .catch(err => console.log(err));
    };

    // add stripped phone number property to each employee
    addStrippedNum = (arr) => {
        arr.forEach(el => {
            el.stripPhone = util.stripPhoneNumber(el.phone)
        });

        return arr;
    };

    // sort in ascending or descending order
    handleArrowClick(cat, subcat = 0) {
        if (this.state.order.direction === "ascending") {
            this.setState({
                resultsFiltered: util.sortDesc(this.state.resultsFiltered, cat, subcat),
                order: { direction: "descending", category: cat }
            });
        } else {
            this.setState({
                resultsFiltered: util.sortAsc(this.state.resultsFiltered, cat, subcat),
                order: { direction: "ascending", category: cat }
            });
        }
    };

    //filter employees by name as user types
    handleInputChange = (event) => {
        event.preventDefault();

        let filtered = this.state.resultsAll.filter(employee => {
            let name = `${employee.name.first} ${employee.name.last}`;
            return name.toLowerCase().startsWith(event.target.value.toLowerCase());
        });

        this.setState({ resultsFiltered: filtered });
    };

    render() {
        return (
            <div>
                <Header />
                <div className="uk-container">
                    <SearchForm handleArrowClick={this.handleInputChange} />
                    <ResultsTable
                        employees={this.state.resultsFiltered}
                        handleArrowClick={this.handleArrowClick}
                        order={this.state.order}
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Homepage;