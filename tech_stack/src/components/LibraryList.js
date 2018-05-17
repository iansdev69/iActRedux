/**
 * @flow
 */
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { 
    Card, 
    CardSection, 
    Button,
    Input,
    Spinner
} from './common';
import ListItem from './ListItem';

type Props = {};

class LibraryList extends Component<Props> {
    
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library={ library }/>;
    }

    render() {
        return (
            <ListView
                dataSource={ this.dataSource }
                renderRow={ this.renderRow }
            />
        );
    }
};

const mapStateToProps = state => {
    const { libraries } = state;
    return { libraries }
}

export default connect(mapStateToProps)(LibraryList);
