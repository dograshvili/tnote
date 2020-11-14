import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ActionSearch extends React.Component {

    handleSearchSubmit = (e) => {
        this.props.navigation.navigate("Home", {
            blOpenSearch: true,
            blMustSearch: true,
            txtToSearch: e.nativeEvent.text
        });
    }

    handleSearchClose = () => {
        this.props.navigation.navigate("Home", {
            blOpenSearch: false,
            blMustSearch: false,
            txtToSearch: ""
        });
    }

    render() {
        const {route} = this.props;
        const {Theme, txtToSearch} = route.params;
        return(
            <>
                <View
                    style={Styles.Container1}
                >
                    <TextInput
                        style={[
                            Styles.TextInput,
                            {
                                borderColor: Theme.actions.borderColor,
                                color: Theme.actions.txtColor,
                            }
                        ]}
                        keyboardType="default"
                        selectionColor="skyblue"
                        returnKeyLabel="search"
                        autoFocus={true}
                        returnKeyType="search"
                        defaultValue={txtToSearch}
                        onSubmitEditing={this.handleSearchSubmit}
                    />
                </View>
                <View
                    style={Styles.Container2}
                >
                    <Button
                        onPress={this.handleSearchClose}
                        icon={
                            <Icon
                            name="close"
                            size={18}
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
                    {/* <Button
                        onPress={this.handleSearchClose}
                        title="close"
                        color={Theme.actions.bgColor}
                    /> */}
                </View>
            </>
        )
    }
};

const Styles = StyleSheet.create({
    Container1: {
        flex: 11
    },
    Container2: {
        flex: 3
    },
    TextInput: {
        borderWidth: 1,
        minHeight: 36,
        maxHeight: 36
    },
    Button: {
        marginLeft: 20,
        marginRight: 5,
        borderStyle: "solid",
        borderWidth: 1
    }
});