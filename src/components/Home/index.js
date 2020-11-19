import * as React from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Actions from './actions';
import Contents from './contents';
import  CustomHelper from '../../static/CustomHelper';

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
        try {
            let notesSaved = await AsyncStorage.getItem("NOTES").then(data => JSON.parse(data));
            this.setState({notes: notesSaved});
        } catch (err) {
            Alert.alert("ERROR", `Could not fetch notes...\nDLERR1010`);
        }
    }

    render() {
        const {navigation} = this.props;
        const {Theme} = this.props.route.params;
        const {params} = this.props.route;
        const {notes} = this.state;
        if (params.action === CustomHelper.ACTIONS.REFETCH_NOTES) {
            this.fetchNotes();
            // TODO: Fix warrning from above code
            navigation.setParams({
                action: null
            });
        }
        console.log(notes);
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