import React,{ Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  TextInput,
  DatePickerAndroid,
} from 'react-native';
const styles = StyleSheet.create({
    headView: {
        height: 40,
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
    checkButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 60,
    },
    checkIcon: {
        height: 30,
        width: 30,
    },
    formPhotoView: {
        alignItems: 'center',
    },
    catchyLogo: {
        height:60,
        marginTop: 0
    },
    photo: {
        height:120,
        width:120,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 60,
        overflow: 'hidden',
    },
    formView: {
        alignSelf: 'stretch',
        marginTop: 10,
    },
    inputDiv: {
        flexDirection:'row',
    },
    separator: {
        alignSelf: 'stretch',
        height: 0.75,
        backgroundColor: '#a5a5a5',
        marginLeft: 20,
        marginTop: 15,
    },
    iconDiv: {
        width:50,
        height:35,
        marginLeft:20,
    },
    iconEmail: {
        width: 35,
        height: 35,
        marginLeft: 10,
    },
    iconKey: {
        width: 25,
        height: 25,
        marginLeft: 15,
        marginTop: 7,
    },
    iconAt: {
        width: 20,
        height: 20,
        marginLeft: 17,
        marginTop: 9,
    },
    iconGift: {
        width: 20,
        height: 20,
        marginLeft: 17,
        marginTop: 7,
    },
    iconPhone: {
        width: 20,
        height: 20,
        marginLeft: 16.5,
        marginTop: 7,
    },
    input: {
        height: 37,
        width: 220,
        alignSelf: 'stretch',
        marginLeft: 5,
    },
});
export default class Register extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.headView}>
                    <TouchableOpacity style={styles.backButton} onPress={this.props.onBack}>
                        <Image style={styles.backIcon} source={require('../../asset/image/icon_back.png')} />
                    </TouchableOpacity>
                    <View style={styles.headTextView}>

                    </View>
                    <TouchableOpacity style={styles.checkButton}>
                        <Image style={styles.checkIcon} source={require('../../asset/image/icon_check.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.formPhotoView}>
                      <Image style={styles.catchyLogo}
                        resizeMode={Image.resizeMode.contain}
                        source={require('../../asset/image/catchy_logo.png')}/>
                      <TouchableHighlight style={styles.photoCircleButton}>
                          <Image style={styles.photo} source={require('../../asset/image/icon_catchy.png')}/>
                      </TouchableHighlight>
                </View>
                <View style={styles.formView}>
                      <View style={styles.separator}></View>
                      <View style={styles.inputDiv}>
                          <View style={styles.iconDiv}>
                              <Image style={styles.iconEmail} source={require('../../asset/image/icon_email_black.png')}/>
                          </View>
                          <TextInput style={styles.input}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder='email'
                              placeholderTextColor='#a5a5a5' />
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.inputDiv}>
                          <View style={styles.iconDiv}>
                              <Image style={styles.iconKey} source={require('../../asset/image/icon_key_black.png')}/>
                          </View>
                          <TextInput style={styles.input}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder='password'
                              placeholderTextColor='#a5a5a5' />
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.inputDiv}>
                          <View style={styles.iconDiv}>
                              <Image style={styles.iconAt} source={require('../../asset/image/icon_at_black.png')}/>
                          </View>
                          <TextInput style={styles.input}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder='user name'
                              placeholderTextColor='#a5a5a5' />
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.inputDiv}>
                          <View style={styles.iconDiv}>
                              <Image style={styles.iconGift} source={require('../../asset/image/icon_gift_black.png')}/>
                          </View>
                          <TextInput style={styles.input}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder='YYYY-MM-DD (optional)'
                              placeholderTextColor='#a5a5a5' />
                      </View>
                      <View style={styles.separator}></View>
                      <View style={styles.inputDiv}>
                          <View style={styles.iconDiv}>
                              <Image style={styles.iconPhone} source={require('../../asset/image/icon_phone_black.png')}/>
                          </View>
                          <TextInput style={styles.input}
                              underlineColorAndroid='rgba(0,0,0,0)'
                              placeholder='your phone number (optional)'
                              placeholderTextColor='#a5a5a5' />
                      </View>
                </View>
            </View>
        );
  }
}
