import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateViewAction } from '../../../store/actions/viewActions';

class Page extends Route {

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (prevProps.path !== this.props.path) {
            // If changing page (navigation)
            this.props.viewToState({ currentPage: this.props.path })
        }
    }

    componentDidMount() {
        this.props.viewToState({ currentPage: this.props.path })
    }

    render() {
        const { component: Component } = this.props;
        const props = this.props;

        return (
            <div>
                {/** Injecting the component inside of the page template */}
                <Component {...props} />
            </div>
        )
    }
}
Page.propTypes = {
    component: PropTypes.func,
    currentPage: PropTypes.string,
    viewToState: PropTypes.func
}
// // //
/** REDUX CONNEXION */
const mapStateToProps = state => ({
    currentPage: state.view.currentPage
})
const mapDispatchToProps = dispatch => {
    return {
        viewToState: (val) => {
            dispatch(
                updateViewAction(val)
            )
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Page);