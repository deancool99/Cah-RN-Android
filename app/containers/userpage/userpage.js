import React,{ Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
const styles = StyleSheet.create({
    background: {
        backgroundColor : 'white',
    },
});
export default class UserPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.background}>
                <TouchableOpacity><Text>userpage</Text></TouchableOpacity>
            </View>
        );
  }
}
