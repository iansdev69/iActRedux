
/**
 * @flow
 */
import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { 
    Card, 
    CardSection, 
    Button,
    Input,
    Spinner
} from './common';
import * as actions from '../actions';

type Props = {};

class ListItem extends Component<Props> {

    componentWillUpdate() {
        LayoutAnimation.spring()
    }
    renderDetail() {
        const { expandIt, library} = this.props;
        if (expandIt) { 
            return (
                <CardSection>
                    <Text style={{ paddingLeft: 15}}>{ library.description }</Text>
                </CardSection>
            );
        }
    }
    render() {
        const { id, title, description } = this.props.library;
        const { titleStyle } = styles
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary( id )}
            >
                <View>
                    <CardSection>
                        <Text style={ titleStyle }>{ title }</Text>
                    </CardSection>
                    { this.renderDetail()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
    }
};

const mapStateToProps = (state, ownProps) => {
    const expandIt = ownProps.library.id  === state.selectedTopicId;
    return { expandIt }
}

export default connect(mapStateToProps, actions)(ListItem);
