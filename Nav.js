import React from 'react';

import { createAppContainer} from 'react-navigation';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';

import VideoScreen from './screens/VideoScreen';
import CourseScreen from './screens/CourseScreen';

import { Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import { NavigationContainer } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Video: VideoScreen
    
});

HomeStack.navigationOptions = {

    tabBarLabel : "Home",
    tabBarIcon : ({ focused }) => {
        
        // <Ionicons 
    //     name = "ios-home" 
    //     size= {25} color={
    //     focused ? "#4f81c7" : "#eae9e9"
    // }/>

    <Icon 
    name = "home" 
    size= {25} color={
    focused ? "#4f81c7" : "#eae9e9"
}/>


    }
    
    
};


const CourseStack= createStackNavigator({
  
    Courses: CourseScreen
    
});

CourseStack.navigationOptions = {

    tabBarLabel : "Course",
    tabBarIcon : ({ focused }) => 
    {
        // <Ionicons 
    //  name = "ios-albums" 
    //   size= {25} 
    //   color={focused ? "#4f81c7" : "#eae9e9"}

    // />

    <Icon 
    name = "book-open-variant" 
     size= {25} 
     color={focused ? "#4f81c7" : "#eae9e9"}

   />
    }

    
    
};

const VideStack= createStackNavigator({
  
    Video: VideoScreen
    
});

VideStack.navigationOptions = {

    tabBarLabel : "Videos",
    tabBarIcon : ({ focused }) => 

        {
// <Ionicons 
    //   name = "ios-videocam" 
    //   size= {25} 
    //   color={focused ? "#4f81c7" : "#eae9e9"}

    //   />

    <Icon 
    name = "video" 
    size= {25} 
    color={focused ? "#4f81c7" : "#eae9e9"}
        
    />
        }

    
};


const BottomTab = createBottomTabNavigator(
    { HomeStack, 
      CourseStack, 
      VideStack
    },
      
    {
        tabBarOptions: {
            showLabel : false,
        
        }

    
    });

const MaterialBottomTab = createMaterialBottomTabNavigator(
    {
        Home: { screen: HomeStack },

        Course: {screen: CourseStack},

        Videos: {screen: VideStack}
    },
    {
        initialRouteName: "Home",
        activeColor: "#5FAB2F",
        inactiveColor: "#9D9D9D",
        barStyle: {backgroundColor: "#EEEEEE"}

    }
)   

//export default createAppContainer(BottomTab);

export default createAppContainer(MaterialBottomTab);