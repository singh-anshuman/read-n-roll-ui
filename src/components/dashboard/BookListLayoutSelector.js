import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as bookActions from './actions/bookActions';
import './css/BookListLayoutSelector.css';

function BookListLayoutSelector(props) {
    return (
        <div className="book-list-layout-selector">
            <ButtonGroup aria-label="Basic example">
                <Button variant="light">Card</Button>
                <Button variant="dark">Grid</Button>
            </ButtonGroup>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        bookListLayout: state.referenceData.bookListLayout
    } 
}

function mapDispatchToProps(dispatch) {
    return {
        bookActions: bindActionCreators(bookActions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BookListLayoutSelector);