import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ChatItem = ({ name, message, time, profilePic }) => {
    return (
        <View style={styles.chatItem}>
            <Image source={{ uri: profilePic }} style={styles.profilePic} />
            <View style={styles.chatDetails}>
                <Text style={styles.name}>{name}</Text>
                <Text numberOfLines={1} style={styles.message}>{message}</Text>
            </View>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
};

const WhatsAppUI = () => {
    const navigation = useNavigation();
    const chatData = [
        {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        }, {
            id: '1',
            name: 'John Doe',
            message: 'Hey, what\'s up?',
            time: '10:00 AM',
            profilePic: 'https://via.placeholder.com/50',
        },
        // Add more chat data as needed
    ];
    const handleChatPress = () => {
        // Navigate to another page when a chat item is pressed
        navigation.navigate('ChatDetails'); // Replace 'ChatDetails' with the name of your destination screen
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={chatData}
                renderItem={({ item }) => (
                    <ChatItem
                        name={item.name}
                        message={item.message}
                        time={item.time}
                        profilePic={item.profilePic}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatDetails: {
        flex: 1,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    message: {
        fontSize: 14,
        color: '#666666',
    },
    time: {
        fontSize: 12,
        color: '#999999',
    },
});

export default WhatsAppUI;
