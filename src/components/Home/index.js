import * as React from 'react';
import { View } from 'react-native';
import Actions from './actions';
import Contents from './contents';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: []
        };
    }

    updateState = state => this.setState(state)

    componentDidMount = () => {
        this.fetchNotes();
    }

    fetchNotes = async () => {

    }

    render() {
        const {Theme} = this.props.route.params;
        const {notes} = this.state;
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: Theme.base.bgColor
                }}
            >
                <Actions
                    {...this.props}
                />
                <Contents
                    notes={notes}
                    {...this.props}
                />
            </View>
        )
    }

};