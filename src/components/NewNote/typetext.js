import * as React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const TypeText = props => {
    const {Theme, updateNewNoteState} = props;
    return (
        <View
            style={{
                flex: 1,
                padding: 20
            }}
        >


            <View
                style={{
                    flex: 1,
                    marginBottom: 15
                }}
            >
                <TextInput
                    style={{
                        borderRadius: 5,
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: "white",
                        color: "white",
                        height: "100%"
                    }}
                    placeholderTextColor="white"
                    placeholder="Enter note title here..."
                    keyboardType="default"
                    selectionColor="skyblue"
                    returnKeyLabel="search"
                    autoFocus={true}
                    onChangeText={title => {}}
                >
                </TextInput>
            </View>


            <View
                style={{
                    flex: 9,
                    marginBottom: 15
                }}
            >
                <TextInput
                    style={{
                        borderRadius: 5,
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: "white",
                        color: "white",
                        height: "100%",
                        textAlignVertical: "top"
                    }}
                    placeholderTextColor="white"
                    placeholder="Enter your body here.."
                    keyboardType="default"
                    selectionColor="skyblue"
                    returnKeyLabel="search"
                    multiline={true}
                    textBreakStrategy="highQuality"
                    onChangeText={txt => {}}
                >
                </TextInput>
            </View>


            <View
                style={{
                    flex: 1,
                    flexDirection: "column"
                }}
            >
                <Button
                    onPress={() => {}}
                    icon={
                        <Icon
                            name="floppy-o"
                            size={20}
                            color="white"
                        />
                    }
                    buttonStyle={{
                        borderStyle: "solid",
                        borderWidth: 1,
                        borderColor: "white",
                        backgroundColor: "black"
                    }}
                />
            </View>



        </View>
    )
}

const Styles = StyleSheet.create({
});

export default TypeText;