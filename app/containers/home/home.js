'use strict';

import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import * as counterActions from '../../actions/counterActions';
import EmailLogin from '../login/emailLogin';
import Register from '../register/register';
import Main from '../main/main';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Image,
  Navigator,
} from 'react-native';

const styles = StyleSheet.create({
    homeView: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoView: {
        alignItems: 'center',
    },
    img: {
        height: 260,
    },
    logo: {
        height: 120,
    },
    buttonView: {
        alignSelf: 'stretch',
        alignItems: 'center',
        margin: 25,
    },
    buttonFbLogin: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#273868',
        borderRadius: 4,
        marginTop: 10,
        height:32,
    },
    buttonEmailLogin:{
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EE3B64',
        borderRadius: 4,
        marginTop: 10,
        height:32,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'SourceSansPro-Regular',
    },
    footView: {
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    footText: {
        fontSize: 12,
        color:'#EE3B64',
        fontFamily: 'SourceSansPro-Regular',
    },
    buttonRegister: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
        borderRadius: 4,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        height: 32,
    },
    footButtonText: {
       color: 'black',
       fontSize: 14,
       fontFamily: 'SourceSansPro-Regular',
    },
});
var NavigationBarRouteMapper = {
  LeftButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.leftButton }</Text>
    )
  },
  Title: function( route, navigator, index, navState ){
    return(
      <Text>{ route.title }</Text>
    )
  },
  RightButton: function( route, navigator, index, navState ){
    return(
      <Text>{ route.rightButton }</Text>
    )
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
  }
  configureScene(route) {
      if(route.id === 'EmailLogin' || route.id === 'Register') {
          return Navigator.SceneConfigs.HorizontalSwipeJump
      } else {
          return Navigator.SceneConfigs.FadeAndroid
      }
  }
  renderSceneAndroid(route, navigator) {
      if (route.id === 'EmailLogin') {
          return (
              <EmailLogin
              navigator={navigator}
              route={route}
              onBack={() => navigator.pop()}
              onLogin={() => navigator.push({id:'Main'})}
              />
          );
      } else if (route.id === 'Register') {
          return (
              <Register
              navigator={navigator}
              route={route}
              onBack={() => navigator.pop()}
              />
          );
      } else if (route.id === 'Main') {
          return (
              <Main />
          );
      }else {
          return (
            <View style={styles.homeView} directionalLockEnabled={true}>
                <View style={styles.logoView}>
                    <Image style={styles.img} resizeMode={Image.resizeMode.contain} source={require('../../asset/image/catchy_home_img.png')}/>
                    <Image style={styles.logo} resizeMode={Image.resizeMode.contain} source={require('../../asset/image/catchy_home_logo.png')}/>
                </View>
                <View style={styles.buttonView}>
                    <TouchableHighlight style={styles.buttonFbLogin}>
                        <Text style={styles.buttonText}>Facebook 登入</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonEmailLogin} onPress={() => navigator.push({id:'EmailLogin'})}>
                        <Text style={styles.buttonText}>email 登入</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.footView}>
                    <Text style={styles.footText}>還沒有帳號嗎 ？</Text>
                    <TouchableHighlight style={styles.buttonRegister} onPress={() => navigator.push({id:'Register'})}>
                        <Text style={styles.footButtonText}>註冊</Text>
                    </TouchableHighlight>
                </View>
            </View>
          );
      }
  }
  render() {
    const { state, actions } = this.props;
    return (
        <Navigator
            style={{backgroundColor: 'white'}}
            initialRoute={{ id: 'Home', index: 0 }}
            configureScene={this.configureScene}
            renderScene={this.renderSceneAndroid}
        />
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Home);
