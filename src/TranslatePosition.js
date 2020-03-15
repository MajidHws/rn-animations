import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Animated } from 'react-native'

export default class TranslatePosition extends Component {

    // state = {
    //     animation: new Animated.Value(1)
    // }

    animation = new Animated.Value(0)
    duration = 1000

    startAnimation = () => {
        Animated.timing(this.animation, {
            toValue: -300,
            duration: this.duration
        }).start(() => {
            //wait for 500ms to revert the opacity back
            setTimeout(() => {
                Animated.timing(this.animation, {
                    toValue: 1,
                    duration: this.duration
                }).start()
            }, 500)
        })
    }

    render() {

        const animationStyle = {
            transform: [
                {translateX: this.animation}
            ]
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
