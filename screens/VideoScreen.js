import React from 'react';

import styled from 'styled-components';

import { TouchableOpacity, ScrollView } from 'react-native';

import MedCard from "../components/MedCard";

import { Video } from 'expo-av';

import MovieCard from "../components/MovieCard";

class VideoScreen extends React.Component
{
    static navigationOptions = {
        header : null
    }

    render(){

        const { navigation } = this.props;

        const video = navigation.getParam("video");

        const MedCardData = navigation.getParam("datas");

        const MovieCardData = navigation.getParam("movieData");

        return(
            <Container>

            {/* <TouchableOpacity onPress = {() => {
                this.props.navigation.goBack();
            }}>

            <Text>{ video.title }</Text>

            </TouchableOpacity> */}

            <VideoContainer>

                <Video source={{
                    uri: "http://techslides.com/demos/sample-videos/small.mp4"
                }} shouldPlay 
                resizeMode="cover"
                  useNativeControls = {true}  
                  style = {{width: "100%", height: "100%"}}
                />

            </VideoContainer>

            <VideoTitle> {video.title} </VideoTitle>

            <MedCardContainer>
      
          <ScrollView horizontal ={true} showsHorizontalScrollIndicator={false}>


        
            {
            MedCardData.map((data,index) => (


              <TouchableOpacity
                 key ={index} onPress ={() => {

                   this.props.navigation.push("Video", {
                     video: data,
                     datas: MedCardData,
                     movieData: MovieCardData
                   });


                 }} 
                   >

              <MedCard image={data.image}/>

              </TouchableOpacity>
            ))
          }

              <MedCard image={video.image}/>

        
        </ScrollView>

          </MedCardContainer>

          <MovieCardContainer>
      
      <ScrollView horizontal ={true} showsHorizontalScrollIndicator={false}>

      {
        MovieCardData.map((data,index) => (


          <TouchableOpacity
             key ={index} onPress ={() => {

               this.props.navigation.push("Video", {
                 video: data,
                 datas: MedCardData,
                 movieData: MovieCardData
               });


             }} 
               >

           
           <MovieCard image = {data.image}/>

          </TouchableOpacity>
        ))
      }
      
      {/* <MedCard/>
      <MedCard/>
      <MedCard/> */}

      </ScrollView>

  </MovieCardContainer>



        </Container>
        );

        
    }
}

export default VideoScreen;

const Container = styled.View`
    flex: 1;
    background: #eaeaea;
    /* justify-content: center;
    align-items: center; */
`;

const Text = styled.Text`

`;

const VideoContainer = styled.View`

        width: 100%;
        height: 201px;
        background: black;

`;

const VideoTitle = styled.Text`

    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    color: #b4b4b4;
    font-family: Roboto;
    font-size: 20px;
    font-weight: 600;


`;

const MedCardContainer = styled.View`

    margin-top: 20px;
    margin-left: 5px;
`;

const ContinueText = styled.Text`

    margin-top: 20px;
    margin-left: 10px;
    color: #b4b4b4;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;

`;

const LikeText = styled.Text`

    margin-top: 20px;
    margin-left: 10px;
    color: #b4b4b4;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;

`;

const MovieCardContainer = styled.View`

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5px;
`;