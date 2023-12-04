import React, { Component } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            filter: "all"
        };
    }

    onSearch = (event) => {
        this.setState({ search: event.target.value.toLowerCase() });
    }

    onFilterChange = (event) => {
        this.setState({ filter: event.target.value });
    }

    filterItem = (item) => {
        const isMatchSearch = item.name.toLowerCase().search(this.state.search) !== -1;
        const isMatchFilter = this.state.filter === "all" || 
            (this.state.filter.toLowerCase() === "fruit" && item.type.toLowerCase() === "fruit") ||
            (this.state.filter.toLowerCase() === "vegetable" && item.type.toLowerCase() === "vegetable");

        return isMatchSearch && isMatchFilter;
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1>Produce Search</h1>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Search" onChange={this.onSearch} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control as="select" value={this.state.filter} onChange={this.onFilterChange}>
                                <option value="all">All</option>
                                <option value="fruit">Fruit</option>
                                <option value="vegetable">Vegetable</option>
                            </Form.Control>
                        </Form.Group>
                        <ListGroup>
                            <List items={this.props.items.filter(this.filterItem)} />
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FilteredList;
