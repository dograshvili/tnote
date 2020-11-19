import 'react-native-gesture-handler';
import * as React from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomHelper from '../../static/CustomHelper';
import Home from '../Home';
import NewNote from '../NewNote';
import EditNote from '../EditNote';

const Stack = createStackNavigator();

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenTheme: "default",
            availableThemes: CustomHelper.THEME.AVAILABLE,
            Themes: {
                default: {
                    base: {
                        txtColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                        bgColor: CustomHelper.COLORS.TERMINAL.TANGO.BLACK
                    },
                    actions: {
                        txtColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                        bgColor: CustomHelper.COLORS.TERMINAL.TANGO.BLACK,
                        borderColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE
                    },
                    note: {
                        txtColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                        bgColor: CustomHelper.COLORS.TERMINAL.TANGO.BLACK,
                        borderColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE
                    },
                    choose: {
                        txtColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                        bgColor: CustomHelper.COLORS.TERMINAL.TANGO.BLACK,
                        borderColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE
                    },
                    type: {
                        text: {
                            txtColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                            borderColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                            plhdTxtColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                            btnIconColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE,
                            btnBgColor: CustomHelper.COLORS.TERMINAL.TANGO.BLACK,
                            btnBorderColor: CustomHelper.COLORS.TERMINAL.TANGO.WHITE
                        }
                    }
                }
            }
        };
    }

    componentDidMount = () => {
        this.initNotes();
    }
    componentDidUpdate = () => {
        console.log('Component updated');
    }

    initNotes = async () => {
        try {
            // await AsyncStorage.removeItem(CustomHelper.VARS.STORAGE.NOTES_KEY);
            let data = await AsyncStorage.getItem(CustomHelper.VARS.STORAGE.NOTES_KEY).then(data => JSON.parse(data));
            if (!data) {
                await AsyncStorage.setItem(CustomHelper.VARS.STORAGE.NOTES_KEY, JSON.stringify([]));
            }
        } catch (err) {
            Alert.alert("ERROR", `Could not initialize notes data storage\nDLERR1000`);
        }
    }

    updateState = state => this.setState(state)

    render() {
        const {Themes, chosenTheme, notes} = this.state;
        const Theme = Themes[chosenTheme];
        return(
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: Theme.base.bgColor
                        },
                        headerTintColor: Theme.base.txtColor,
                        headerTitleStyle: {}
                    }}
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        initialParams={{
                            Theme: Theme,
                            blOpenSearch: false,
                            blMustSearch: false,
                            txtToSearch: ""
                        }}
                        options={{
                            title: "Home Title"
                        }}
                    />
                    <Stack.Screen
                        name="EditNote"
                        component={EditNote}
                        initialParams={{
                            Theme: Theme
                        }}
                        options={{
                            title: "Edit Note"
                        }}
                    />
                    <Stack.Screen
                        name="NewNote"
                        component={NewNote}
                        initialParams={{
                            Theme: Theme
                        }}
                        options={{
                            title: "New Note"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }

};
