import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionSearch from './actionSearch';
import ActionSettings from './actionSettings';

export default class Actions extends React.Component {
    constructor(props) {
        super(props);
    }

    handleOpenSettings = () => {
        // TODO: Must open settings
        console.log('Open settings');
    }

    handleOpenSearch = () => {
        this.props.navigation.navigate("Home", {
            blOpenSearch: true
        });
    }

    handleNewNote = () => {
        this.props.navigation.navigate("NewNote", {});
    }

    render() {
        const {route, navigation} = this.props;
        const {Theme, blOpenSearch} = route.params;
        let inner = (
            <>
                <View
                    style={Styles.ContainerActions1}
                >
                    <Button
                        onPress={this.handleNewNote}
                        icon={
                            <Icon
                            name="plus-circle"
                            size={20}
                            color={Theme.actions.txtColor}
                            />
                        }
                        buttonStyle={[
                            Styles.Button,
                            {
                                borderColor: Theme.actions.borderColor,
                                backgroundColor: Theme.actions.bgColor
                            }
                        ]}
                    />
                </View>
                <View
                    style={Styles.ContainerActions2}
                >
                    <Button
                        onPress={this.handleOpenSettings}
                        icon={
                            <Icon
                            name="cogs"
                            size={20}
                            color={Theme.actions.txtColor}
                            />
                        }
                        buttonStyle={[
                            Styles.Button,
                            {
                                marginRight: 10,
                                borderColor: Theme.actions.borderColor,
                                backgroundColor: Theme.actions.bgColor
                            }
                        ]}
                    />
                    <Button
                        onPress={this.handleOpenSearch}
                        icon={
                            <Icon
                            name="search"
                            size={20}
                            color={Theme.actions.txtColor}
                            />
                        }
                        buttonStyle={[
                            Styles.Button,
                            {
                                borderColor: Theme.actions.borderColor,
                                backgroundColor: Theme.actions.bgColor
                            }
                        ]}
                    />
                </View>
            </>
        );
        if (blOpenSearch) {
            inner = (
                <ActionSearch
                    {...this.props}
                />
            )
        }
        return(
            <View
                style={Styles.Container}
            >
                {inner}
            </View>
        )
    }

}

const Styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    ContainerActions1: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    ContainerActions2: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    Button: {
        borderStyle: "solid",
        borderWidth: 1
    }
});