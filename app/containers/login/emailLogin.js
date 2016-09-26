import React,{ Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  TextInput,
} from 'react-native';
const styles = StyleSheet.create({
    headView: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        height: 40,
        width: 60,
    },
    backIcon: {
        height: 25,
        width: 25,
    },
    headTextView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headText: {
        color: 'black',
        fontFamily: 'SourceSansPro-Regular',
        fontSize: 15,
        fontWeight: 'bold',
    },
    bodyView: {
        alignItems: 'center',
        marginTop: 40,
    },
    bodyText: {
        color: 'black',
        fontSize: 15,
    },
    inputBorder: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 40,
        alignSelf: 'stretch',
        borderWidth: 1.3,
        borderRadius: 4,
        flexDirection: 'row',
    },
    emailIconView: {
        flex:0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailIcon: {
        height: 30,
        width: 30,
    },
    keyIconView: {
        flex:0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    keyIcon: {
        height: 30,
        width: 30,
    },
    input: {
        flex: 1,
        height: 40,
        width: 50,
        borderWidth: 0,
        marginRight: 5,
    },
    loginButton: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
        borderRadius: 4,
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
        height: 32,
    },
    loginText: {
        color: 'black',
        fontFamily: 'SourceSansPro-Regular',
    },
    footView: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footText: {
        fontSize: 12,
        color: 'black',
    },

});
export default class EmailLogin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.headView}>
                    <TouchableHighlight style={styles.backButton} onPress={this.props.onBack}>
                        <Image style={styles.backIcon} source={require('../../asset/image/icon_back.png')} />
                    </TouchableHighlight>
                    <View style={styles.headTextView}>
                        <Text style={styles.headText}>Log in</Text>
                    </View>
                </View>
                <View style={styles.bodyView}>
                    <Text style={styles.bodyText}>log in to your account</Text>
                    <View style={styles.inputBorder}>
                        <View style={styles.emailIconView}>
                            <Image style={styles.emailIcon} source={require('../../asset/image/icon_email.png')} />
                        </View>
                        <TextInput style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholder="email"
                        placeholderTextColor="#A5A5A5" />
                    </View>
                    <View style={styles.inputBorder}>
                        <View style={styles.keyIconView}>
                            <Image style={styles.keyIcon} source={require('../../asset/image/icon_key.png')} />
                        </View>
                        <TextInput style={styles.input}
                        underlineColorAndroid={'transparent'}
                        placeholder="password"
                        placeholderTextColor="#A5A5A5"/>
                    </View>
                    <TouchableHighlight style={styles.loginButton} onPress={this.props.onLogin}>
                        <Text style={styles.loginText}>登入</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.footView}>
                    <Text style={styles.footText}>忘記密碼 ？</Text>
                </View>
            </View>
        );
  }
}
