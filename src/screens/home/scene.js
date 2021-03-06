import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity, 
    ImageBackground 
} from 'react-native';

import React, { Component } from 'react';
import TimeSlideShow from 'react-native-timed-slideshow';
import Style from './style'
import Router from '../../navigator/router';
import Assets from './utils/constants';
import ImagePickerExample from './utils/functions';
export default class Home extends Component {

    render() {
        return (
            <ImageBackground 
                source = {Assets.background} 
                style = {Style.background_size}
            >

                <ImagePickerExample style={Style.profile_size}/>
                
                
                <View style = {Style.slider_size}>
                    <TimeSlideShow   
                        items = {Assets.slider}
                        titleStyle = { {fontSize: 10} }
                        textStyle = { {fontSize: 10} }
                        footerStyle = {{backgroundColor: (0,0,0,0)}}
                        showProgressBar = { false }
                        renderCloseIcon = {() => { return true; }}
                        renderIcon = {() => { return true; }}
                    />
                </View>

                <View style = {Style.container}>
                    <View style = {Style.row}>
                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Area', {Area: 'Area'});
                        }}>
                            <ImageBackground 
                            color="white"
                                source = {Assets.map} 
                                style = {Style.button_size}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Chat', {Chat: 'Chat'});
                        }}>
                            <ImageBackground 
                                source = {Assets.chaty} 
                                style = {Style.button_size}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {Style.row}>
                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Setting', {Setting: 'Setting'});
                        }}>
                            <ImageBackground 
                                source = {Assets.setting} 
                                style = {Style.button_size}/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style = {Style.button_size}
                            activeOpacity = {0.5}  
                            onPress = {() => {
                            Router.navigation('Bookroom', {Bookroom: 'Bookroom'});
                        }}>
                            <ImageBackground 
                                source = {Assets.bookroom} 
                                style = {Style.button_size}/>
                        </TouchableOpacity>

                        
                    </View>
                </View>
            </ImageBackground>
        );
    }
}