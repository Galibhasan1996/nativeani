import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, TextInput, Alert, ActivityIndicator, Modal, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CurosualData } from './Data/CurosualData'
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');


const Home = () => {
    const renderItem = data => (
        <View
            key={data.Id}
            style={styles.cardContainer}
        >
            <View
                style={styles.cardWrapper}
            >
                <Image
                    style={styles.card}
                    source={{ uri: data.coverImageUri }}
                />
                <View
                    style={[
                        styles.cornerLabel,
                        { backgroundColor: data.cornerLabelColor },
                    ]}
                >
                    <Text style={styles.cornerLabelText}>
                        {data.cornerLabelText}
                    </Text>
                </View>
            </View>
        </View>
    );




    return (
        <View style={styles.container}>
            <Carousel
                pagination={PaginationLight}
                renderItem={renderItem}
                data={CurosualData}
                loop
                autoplay
            />




        </View>
    );
}

export default Home

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
    },
    cardWrapper: {
        // borderRadius: 8,
        overflow: 'hidden',
    },
    card: {
        width: width * 1,
        height: width * 0.5,
    },
    cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        // borderTopLeftRadius: 8,
    },
    cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
});