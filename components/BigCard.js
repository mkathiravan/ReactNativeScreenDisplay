import React from 'react';

import styled from 'styled-components';

export default class BigCard extends React.Component
{
    render(){
        return (

            <Container>

                <Image source={{ uri: this.props.image}}/>

                
                
            </Container>
        )
    }
}

const Container = styled.View`

    width: 328px;
    height: 190px;
    border-radius: 5px;
    background: white;
    overflow: hidden;
    margin-left: 10px;


`;

const Image = styled.Image`

    width: 100%;
    height: 100%;

`;