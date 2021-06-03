import React from 'react';

import styled from 'styled-components';

class CourseScreen extends React.Component
{
    render(){

        return(
            <Container>

            <Text>CourseScreen</Text>

        </Container>
        )
       
    }
}

export default CourseScreen;

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text`

`;