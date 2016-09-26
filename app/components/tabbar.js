import React,{ Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
const styles = StyleSheet.create({
  tabView: {
      flex: 1,
      height: 60,
      backgroundColor: 'white',
      overflow:'visible',
      alignSelf: 'stretch',
      marginTop:15,
      elevation:20,
      flexDirection:'row',
  },
  tabButton: {
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
  },
  tabCircleView: {
      height: 60,
      width:60,
      borderRadius: 30,
      backgroundColor:'white',
      position:'relative',
      top:-74,
      elevation:20,
      justifyContent: 'center',
      alignItems: 'center',
  },
  tabCircle: {
      height: 40,
      width: 40,
      borderRadius: 20,
      backgroundColor: '#EE3B64',
      justifyContent: 'center',
      alignItems: 'center',
  },
});
export default class TabBar extends Component {
    constructor(props) {
        super(props);
    }
    goSearch () {
      this.props.navigator.push({
        id: 'Notification',
      })
    }
    render() {
        return (
          <View style={{alignItems:'center',}}>
              <View style={styles.tabView}>
                  <TouchableOpacity style={styles.tabButton}>
                      <Image style={{height:30,width:30}} source={require('../asset/image/icon_home.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tabButton} onPress={this.props.goSearch}>
                      <Image style={{height:30,width:30}} source={require('../asset/image/icon_search.png')} />
                  </TouchableOpacity>
                  <View style={{height: 45, width: 60}}></View>
                  <TouchableOpacity style={styles.tabButton}>
                      <Image style={{height:30,width:30}} source={require('../asset/image/icon_user.png')} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.tabButton}>
                      <Image style={{height:30,width:30}} source={require('../asset/image/icon_bell.png')} />
                  </TouchableOpacity>
              </View>
              <View style={styles.tabCircleView}>
                  <TouchableOpacity style={styles.tabCircle}>
                      <Image style={{height:30,width:30}} source={require('../asset/image/icon_plus.png')} />
                  </TouchableOpacity>
              </View>
          </View>
        );
  }
}
