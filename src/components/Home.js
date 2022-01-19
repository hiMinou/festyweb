import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                
                description=" "
                 description="At the iut , many students are not from Lyon or France in genral , and it's difficult for them 
to fit in especially when they don't have family here . In fact with the curent health situation 
it's very difficult for them to do a lot of things.
This is a situation  we want to solve with our association.
"
                backgroundImg="Who.jpg"
                leftBtnText= "Join Us"
                rightBtnText= "Donate"
            />

            <Section
                title="Who we are"
                description="We are iut's Lyon students which come from different countries/regions who wants to share our 
                            food's culture . We want those students from everywhere to have a day to present their local food and share 
                            it with others."
                backgroundImg="f3.jpg"
                leftBtnText="Join Us"
                rightBtnText="Donate"
            />

            <Section
                title="How we help"
                description="Festy food is an association that organises a cultural festival that brings people 
together from different countries \regions for sharing their local food 
It’s an association which aims brings people together thanks to their differences.
This will be very interesting for all the students and in fact they will learn about others cultures ."
                backgroundImg="f2.jpg"
                leftBtnText="Join Us"
                rightBtnText="Donate"
            />

            <Section 
                title="Festy'food"
                description="we will choose a beautifull outdoor center where people can enjoy themselves 
while respecting barrier gestures .
Our first date is not yet chosen but we plan to do so during the month of may
We will organize stands run by our iut's student ambassadors who will have a budget to 
shop and cook on their own. We help them set up their stands thats why we need ambassadors torepresent 
where there come from (mettre un lien devenir ambassadeur). In fact we will have volunteers to set
 up the decoration. We will need also supprot of the region and the iut because we want to promote diversity.
"
                backgroundImg="f5.jpg"
                leftBtnText="Join Us"
                rightBtnText="Donate"
            />
                
            
            <Footer
            
            
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100%;
    height: 100vh;
`

const Footer = styled.div`


`