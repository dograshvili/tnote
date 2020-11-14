import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

const ChooseType = props => {
    const {Theme, updateNewNoteState} = props;
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <View
                style={Styles.ContainerInfo}
            >
                <Text
                    style={[Styles.InfoText, {color: Theme.choose.txtColor}]}
                >
                    Select the type of note
                </Text>
            </View>
            <View
                style={{
                    flex: 2
                }}
            >
                <Button
                    onPress={() => updateNewNoteState({type: "text"})}
                    title="text"
                    titleStyle={Styles.ButtonTitle}
                    buttonStyle={[
                        Styles.Button,
                        {
                            borderColor: Theme.choose.borderColor,
                            backgroundColor: Theme.choose.bgColor
                        }
                    ]}
                />
                <Button
                    onPress={() => updateNewNoteState({type: "list"})}
                    title="list"
                    titleStyle={Styles.ButtonTitle}
                    buttonStyle={[
                        Styles.Button,
                        {
                            borderColor: Theme.choose.borderColor,
                            backgroundColor: Theme.choose.bgColor
                        }
                    ]}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    ContainerInfo: {
        flex: 1,
        alignContent: "center",
        alignItems: "center"
    },
    InfoText: {
        marginTop: 135,
        fontSize: 20
    },
    ButtonTitle: {
        textTransform: "uppercase"
    },
    Button: {
        margin: 15,
        borderStyle: "solid",
        borderWidth: 2
    }
});

export default ChooseType;