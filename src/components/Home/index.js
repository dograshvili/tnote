import * as React from 'react';
import { View } from 'react-native';
import Actions from './actions';
import Contents from './contents';

export default class Home extends React.Component {

    render() {
        const {route, navigation} = this.props;
        const {Theme, blMustSearch, txtToSearch} = route.params;
        console.log(`blMustSearch = ${blMustSearch}   txtToSearch = ${txtToSearch}`);
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
                    {...this.props}
                />
            </View>
        )
    }

};