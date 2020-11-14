import 'react-native-gesture-handler';
import * as React from 'react';
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
            notes: {},
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
                    }
                }
            }
        };
    }

    componentDidMount = () => {
        this.fetchNotes();
    }

    fetchNotes = async () => {
        const notes = [
            {
                id: "1",
                type: "text",
                dtcreated: "2020-09-10 16:33:18",
                title: "Super market",
                contents: "Na min ksexasw na parw ta pragmata apo to super market"
            },
            {
                id: "2",
                type: "text",
                dtcreated: "2020-09-15 16:33:18",
                title: "Metting",
                contents: "Exw sinantisi me ton boss"
            },
            {
                id: "3",
                type: "list",
                dtcreated: "2020-09-25 16:33:18",
                title: "Super market",
                contents: [
                    {
                        bldone: false,
                        contents: "Frouta"
                    },
                    {
                        bldone: false,
                        contents: "Tost Pswmi"
                    },
                    {
                        bldone: false,
                        contents: "Tost tyri"
                    }
                ]
            }
        ];
        this.setState({
            notes: notes
        });
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
                            notes: notes,
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
