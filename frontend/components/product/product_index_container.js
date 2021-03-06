import React from 'react';
import { connect } from 'react-redux';
import IndexForm from './product_index'
import { requestAllProducts } from "../../actions/product_index_actions";
import { getCartItems } from "../../actions/cart_actions";

const mapStateToProps = state => {
    return {
        products: Object.values(state.entities.products)
    }
};

const mapDispatchToProps = dispatch => ({
    requestAllProducts: () => dispatch(requestAllProducts()),
    getCartItems: () => dispatch(getCartItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexForm)