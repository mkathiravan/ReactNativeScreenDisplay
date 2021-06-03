import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

class MovieCard extends React.Component
{

    render() {
        return(

            <Container>

             

                <Image source = {{uri: this.props.image}}/>

            
            </Container>
        )
    }
}

export default MovieCard;

const Container = styled.View`

    width: 130px;
    height: 172px;
    background: white;
    border-radius: 4px;
    overflow: hidden;
    margin-left: 10px;
`;

const Image = styled.Image`
    width: 100%
    height: 100%
`;
