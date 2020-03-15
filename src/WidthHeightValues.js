import React, { Component } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Animated, Easing } from 'react-native'

export default class Opacity extends Component {

    // state = {
    //     animation: new Animated.Value(1)
    // }

    animation = new Animated.Value(0)
    duration = 1000

    startAnimation = () => {
        Animated.spring(this.animation, {
            toValue: 40,
            duration: this.duration,
            // easing: Easing.bounce
            tension: 150,
            friction: 2
           
        }).start(() => {
            //wait for 500ms to revert the opacity back
            setTimeout(() => {
                Animated.timing(this.animation, {
                    toValue: 0,
                    duration: this.duration
                }).start()
            }, 500)
        })
    }

    render() {

        const animationStyle = {
            top: this.animation,
            left: this.animation,
            right: this.animation
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[styles.box,animationStyle]}>

                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: 100, 
        // width: 100, 
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    }
})