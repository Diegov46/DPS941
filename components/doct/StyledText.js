import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        color: '#1e272e'
    },
    bold:{
        fontWeight: 'bold'
    },
    blue:{
        color: '#3B3B98'
    },
    big:{
        fontSize: 20
    },
    small:{
        fontSize: 10
    }
})
export default  function StyledText({blue, bold, children, big, small, style})
{
    const textStyles = [
        styles.text,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small,
        style
    ]
    return (
        <Text style={textStyles}>
            {children}
        </Text>
    )

};