import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, StatusBar, StyleSheet, Pressable } from 'react-native';

export default class Contents extends React.Component {

    render() {
        const {route, navigation, notes} = this.props;
        const {Theme} = route.params;
        return(
            <View
                style={Styles.BaseContainer}
            >
                <SafeAreaView
                    style={Styles.SafeAreaViewContainer}
                >
                    <FlatList
                        data={notes}
                        renderItem={({item}) => {
                            return (
                                <View
                                    style={[
                                        Styles.NoteContainer,
                                        {
                                            backgroundColor: Theme.note.bgColor,
                                            borderColor: Theme.note.borderColor
                                        }
                                    ]}
                                >
                                    <Pressable
                                        hitSlop={0}
                                        android_ripple={{
                                            color: Theme.note.txtColor,
                                            borderless: false,
                                            radius: 180
                                        }}
                                        onPress={() => navigation.navigate("EditNote", {noteData: item})}
                                    >
                                        <View
                                            style={Styles.NoteContentContainer}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 18,
                                                    color: Theme.note.txtColor
                                                }}
                                            >
                                                {item.title}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: 12,
                                                    marginTop: 10,
                                                    color: Theme.note.txtColor
                                                }}
                                            >
                                                {item.dtcreated}
                                            </Text>
                                        </View>
                                    </Pressable>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        )
    }

};

const Styles = StyleSheet.create({
    BaseContainer: {
        flex: 10,
        alignItems: "center"
    },
    SafeAreaViewContainer: {
        flex: 1,
        flexDirection: "row",
        marginTop: StatusBar.currentHeight || 0
    },
    NoteContainer: {
        flex: 1,
        flexDirection: "column",
        marginVertical: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderRadius: 12.5
    },
    NoteContentContainer: {
        flex: 1,
        alignItems: "flex-start",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10
    }
});