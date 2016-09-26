import React,{ Component, PropTypes } from 'react';
import Search from '../search/search';
import Notification from '../notification/notification';
import UserPage from '../userpage/userpage';
import House from '../house/house';
import Tabbar from 'react-native-tabbar';
import TabBar from '../../components/tabbar';
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

});

export default class Main extends Component {
    constructor(props) {
        super(props);
    }
    configureScene(route) {
        if(route.id === 'Search') {
            return Navigator.SceneConfigs.FadeAndroid
        } else {
            return Navigator.SceneConfigs.FadeAndroid
        }
    }
    renderSceneAndroid(route, navigator) {
        
        if (route.id === 'Search') {
            return (
                <Search
                navigator={navigator}
                route={route}
                />
            );
        } else if (route.id === 'Notification'){
            return (
                <Notification
                navigator={navigator}
                route={route}
                />
            );
        } else if (route.id === 'UserPage'){
            return (
                <UserPage
                navigator={navigator}
                route={route}
                />
            );
        } else {
          return (
              <Text>QQ</Text>
          );
        }
    }
    render() {
        return (
            <Navigator
                style={{backgroundColor: 'white'}}
                initialRoute={{ id: 'Search', index: 0 }}
                configureScene={this.configureScene}
                renderScene={this.renderSceneAndroid}
                navigationBar={
                    <Tabbar
                        show={true}
                        disable={false}
                        height={82}
                        ref={(ref) => this.tabarRef = ref}
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0)'}}>
                        <TabBar
                            goSearch={this.goSearch}
                        />
                    </Tabbar>
                }
            />
        );
    }
}
