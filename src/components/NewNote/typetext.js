import * as React from 'react';
import { View, TextInput, Alert, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import AsyncStorage from '@react-native-community/async-storage';
import CustomHelper from '../../static/CustomHelper';

export default class TypeText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            note: ""
        };
    }

    setData = async () => {
        const {title, note} = this.state;
        if (title && note) {
            let data = {
                date: moment(),
                type: "text",
                title: title,
                note: note
            };
            try {
                let notesSaved = await AsyncStorage.getItem("NOTES").then(data => JSON.parse(data));
                data['id'] = (notesSaved.length + 1).toString();
                notesSaved.push(data);
                await AsyncStorage.setItem("NOTES", JSON.stringify(notesSaved));
            } catch(err) {
                Alert.alert("ERROR", `Error while saving data...\nDLERR1020`);
            }
            this.props.navigation.navigate("Home", {
                action: CustomHelper.ACTIONS.REFETCH_NOTES
            });
        } else {
            if (!title) {
                Alert.alert("INFO", "You must add a title");
            } else {
                Alert.alert("INFO", "You must add a note");
            }
        }
    }

    render() {
        const {route} = this.props;
        const {Theme} = route.params;
        return (
            <View
                style={Styles.ContainerBase}
            >
                <View
                    style={Styles.Container1}
                >
                    <TextInput
                        style={[
                            Styles.TextInput,
                            {
                                borderColor: Theme.type.text.borderColor,
                                color: Theme.type.text.txtColor
                            }
                        ]}
                        placeholderTextColor={Theme.type.text.plhdTxtColor}
                        placeholder="Enter note title here..."
                        keyboardType="default"
                        selectionColor="skyblue"
                        returnKeyLabel="search"
                        autoFocus={true}
                        autoCorrect={false}
                        spellCheck={false}
                        onChangeText={title => this.setState({title: title})}
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
                        style={[
                            Styles.TextInput,
                            {
                                textAlignVertical: "top",
                                borderColor: Theme.type.text.borderColor,
                                color: Theme.type.text.txtColor
                            }
                        ]}
                        placeholderTextColor={Theme.type.text.plhdTxtColor}
                        placeholder="Enter your note here.."
                        keyboardType="default"
                        selectionColor="skyblue"
                        returnKeyLabel="search"
                        multiline={true}
                        autoCorrect={false}
                        spellCheck={false}
                        textBreakStrategy="highQuality"
                        onChangeText={txt => this.setState({note: txt})}
                    >
                    </TextInput>
                </View>
                <View
                    style={Styles.Container2}
                >
                    <Button
                        onPress={() => this.setData()}
                        icon={
                            <Icon
                                name="floppy-o"
                                size={20}
                                color={Theme.type.text.btnIconColor}
                            />
                        }
                        buttonStyle={[
                            Styles.Button,
                            {
                                borderColor: Theme.type.text.btnBorderColor,
                                backgroundColor: Theme.type.text.btnBgColor
                            }
                        ]}
                    />
                </View>
            </View>
        )
    }
}

const Styles = StyleSheet.create({
    ContainerBase: {
        flex: 1,
        padding: 20
    },
    Container1: {
        flex: 1,
        marginBottom: 15
    },
    Container2: {
        flex: 1,
        flexDirection: "column"
    },
    TextInput: {
        borderRadius: 5,
        borderStyle: "solid",
        borderWidth: 1,
        height: "100%"
    },
    Button: {
        borderStyle: "solid",
        borderWidth: 1
    }
});