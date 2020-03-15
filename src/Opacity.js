import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Animated } from 'react-native'

export default class Opacity extends Component {

    // state = {
    //     animation: new Animated.Value(1)
    // }

    animation = new Animated.Value(1)

    startAnimation = () => {
        Animated.timing(this.animation, {
            toValue: 0,
            duration: 350
        }).start(() => {
            //wait for 500ms to revert the opacity back
            setTimeout(() => {
                Animated.timing(this.animation, {
                    toValue: 1,
                    duration: 350
                }).start()
            }, 500)
        })
    }

    render() {

        const animationStyle = {
            opacity: this.animation
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableWithoutFeedback onPress={this.startAnimation}>
                    <Animated.View style={[
                        { height: 100, width: 100, backgroundColor: 'red' },
                        animationStyle
                    ]}></Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
