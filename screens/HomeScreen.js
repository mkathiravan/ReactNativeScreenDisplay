import React from "react";
import { StatusBar, ScrollView } from 'react-native';
import styled from "styled-components";
import BigCard from '../components/BigCard'; 
import MedCard from "../components/MedCard";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Animated } from 'react-native';
import Menu from "../components/Menu";
import { connect } from 'react-redux';
import MovieCard from "../components/MovieCard";
import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: "AIzaSyA45xsMF90MYrZPdPztnotAVezP3-6zo0Y",
//   authDomain: "react-native-76488.firebaseapp.com",
//   projectId: "react-native-76488",
//   storageBucket: "react-native-76488.appspot.com",
//   messagingSenderId: "716624384010",
//   appId: "1:716624384010:web:14248aebab64f449464ff3",
//   measurementId: "G-86KC2WDTKP"
// };



// const firebaseApp = firebase.initializeApp(firebaseConfig);


function mapStateToProps(state)
{
    return {menu: state.menu}
}

function mapDispatchToProps(dispatch)
{
    return {
        openMenu : () => dispatch({
            type: "OPENMENU"
        })
    }
}


class HomeScreen extends React.Component
{

  static navigationOptions = {
      header: null
  };

  state = {
    left: 10,
    top: new Animated.Value(900),
    opacity: new Animated.Value(0),
    MedCardData: []

  }

  componentDidUpdate()
  {
      this.blackScreen();
  }

  // componentDidMount()
  // {
  //   console.disableYellowBox = true;

  //   this.database = firebaseApp.
  //                 database().
  //                 ref().
  //                 child("MedCardData");
  //   this.database.on("value", (snap) => {

  //       let MedCardFData = [];
  //       snap.forEach(child => {

  //         MedCardFData.push({

  //           title: child.val().title,

  //           image: child.val().image
  //         });

  //       });
        
  //       this.setState({

  //         MedCardData: MedCardFData
  //       })

  //       console.log(MedCardData);

  //   });

  // }

  blackScreen()
  {
     if(this.props.menu == "openMenu")
     {
        Animated.timing(this.state.top, {toValue: 0, duration: 60}).start();

        Animated.timing(this.state.opacity, {toValue: 0.6, duration: 500}).start();
     }

     if(this.props.menu == "closeMenu")
     {
        Animated.timing(this.state.top, {toValue: 900, duration: 10}).start();

        Animated.spring(this.state.opacity, {toValue: 0}).start();
     }
  }

  render(){

    return(

        <Root>


      <Main>

      

      <ScrollView showsVerticalScrollIndicator={false}>

      <StatusBar hidden/>

      <Header>

      <TouchableOpacity onPress={this.props.openMenu}  style={{

          position: "absolute",
          top: 15,
          left: this.state.left,
          zIndex: 100

      }}>
        <Ionicons name ="ios-menu" size = {30} color = "black"/>

      </TouchableOpacity>
     

          <Logo>  hotStar  </Logo>

         <Profile>


         </Profile>
        
      </Header>

      <BigCardContainer>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

      {/* <BigCard image = "https://wallpapercave.com/wp/wp6672624.jpg"/>
      <BigCard image = "https://www.wallpaperbetter.com/wallpaper/687/448/40/wayne-rooney-v-manchester-city-720P-wallpaper-middle-size.jpg"/>
      <BigCard image = "https://c4.wallpaperflare.com/wallpaper/747/472/920/football-star-cristiano-ronaldo-celebrity-wallpaper-preview.jpg"/>
      <BigCard image = "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/11/07090409/Ruud-van-Nistelrooy-Man-Utd-F365.jpg"/> */}

  
      
        {
          BigCardData.map((data,index)=>{

           return <BigCard key = {index} image ={data.image}/>
          })
        }

      </ScrollView>

      </BigCardContainer>


      <ContinueText>Continue Watching</ContinueText>

        <MedCardContainer>
      
          <ScrollView horizontal ={true} showsHorizontalScrollIndicator={false}>


{/*           
          {
            this.state.MedCardData.map((data,index) => (


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
          } */}
          

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
          
          {/* <MedCard/>
          <MedCard/>
          <MedCard/> */}

          </ScrollView>

      </MedCardContainer>

      <LikeText>You May Also Like</LikeText>

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




      </ScrollView>


      </Main>

      


      <AnimatedBlack style = {{top: this.state.top, opacity: this.state.opacity}}/>

      <Menu/> 

      </Root>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


const Root = styled.View`
    flex: 1;
`;

const Main = styled.View`
    flex: 1;
    background-color: #eaeaea;
`;

const Black = styled.View`

    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.6;

`;

const AnimatedBlack = Animated.createAnimatedComponent(Black);

const Header = styled.View`

  width: 100%;
  height: 56px;
  background: white;
`;

const Logo = styled.Text`

  margin-top: 10px;
  margin-left: 40px;
  color: black;
  font-size: 25px;

`;

const Profile = styled.Image`

  position: absolute;
  top: 5px;
  right: 5px;
  width: 45px;
  height: 45px;
  background: #C4C4C4;
  border-radius: 22px

`;

const BigCardContainer = styled.View`
    margin-top: 30px;
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

const MedCardContainer = styled.View`

    margin-top: 20px;
    margin-left: 5px;
`;

const MovieCardContainer = styled.View`

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5px;
`;


//To maintain the static Data of the images
const BigCardData = [
  {
    image: "https://wallpapercave.com/wp/wp6672624.jpg",
    title: "1"
  },{
    image: "https://www.wallpaperbetter.com/wallpaper/687/448/40/wayne-rooney-v-manchester-city-720P-wallpaper-middle-size.jpg",
    title: "2"
  },{
    image: "https://c4.wallpaperflare.com/wallpaper/747/472/920/football-star-cristiano-ronaldo-celebrity-wallpaper-preview.jpg",
    title: "3"
  },
  {
    image: "https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2020/11/07090409/Ruud-van-Nistelrooy-Man-Utd-F365.jpg",
    title: "4"
  }
];

const MedCardData = [
  {
    image: "https://d3nfwcxd527z59.cloudfront.net/content/uploads/2019/08/27081211/Ronaldo-Brazil.jpg",
    title: "Big Boss Season 3"
  },{
    image: "https://images.outlookindia.com/public/uploads/articles/2020/3/21/Untitled-1_copy_571_855.jpg",
    title: "2"
  },{
    image: "https://images.daznservices.com/di/library/Goal_Argentina/30/f5/kaka-brazil_1uvw9xnzbvvjm1vsps2gw1ssk6.jpg?t=-1289687249&quality=100",
    title: "3"
  },
  {
    image: "https://i.pinimg.com/originals/4c/15/22/4c1522229a1e05a6f980fb7251ba4137.jpg",
    title: "4"
  }
];

const MovieCardData = [
  {
    image: "https://i.pinimg.com/736x/b6/c7/09/b6c709bb113b9890fcacd880cba2d8fb.jpg",
    title: "Zidane"
  },{
    image: "https://c.ndtvimg.com/2019-11/sd8itrvo_lionel-messi_625x300_01_November_19.jpg",
    title: "Messi"
  },{
    image: "https://images.daznservices.com/di/library/omnisport/ae/32/miroslavklose-cropped_14prcg0sp52x91nyw4hlga39je.jpg?t=-1602660923&w=800&h=600",
    title: "Klose"
  },
  {
    image: "https://s.ndtvimg.com/images/content/2014/jul/806/arjen-robben-sad.jpg?q=60",
    title: "Robben"
  }
]