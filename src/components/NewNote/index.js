import * as React from 'react';
import { View, Text } from 'react-native';
import CustomHelper from '../../static/CustomHelper';
import ChooseType from './choose';
import TypeText from './typetext';

export default class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            data: {}
        };
    }

    updateState = state => this.setState(state);

    render() {
        const {route, navigation} = this.props;
        const {Theme} = route.params;
        const {type} = this.state;
        let inner;
        if (type === CustomHelper.VARS.NEW_NOTE.TYPE_TEXT) {
            inner = <TypeText
                        {...this.props}
                    />;
        } else if (type === CustomHelper.VARS.NEW_NOTE.TYPE_LIST) {
            inner = <Text>{type}</Text>;
        } else {
            inner =
                <ChooseType
                    Theme={Theme}
                    updateNewNoteState={this.updateState}
                />;
        }
        return(
            <View
                style={{
                    flex: 1,
                    backgroundColor: Theme.base.bgColor
                }}
            >
                {inner}
            </View>
        )
    }

}