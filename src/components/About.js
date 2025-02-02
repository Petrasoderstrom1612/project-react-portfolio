import React from 'react';
import styled from 'styled-components';
import { OuterWrapper } from './OuterWrapper'

const About = () => {
	return (
		<OuterWrapper primary>
			<AboutStyler className="innerwrapper">
				<p><Line /><Dot /> Hello! I&apos;m a frontend developer with
			business background. I&apos;m all about solving problems and finding
			effective solutions to them. I love to work just within tech branch.
			Tech is the future and I love how there is always something new one
			can learn to it!
				</p>
			</AboutStyler>
		</OuterWrapper>
	)
}

export default About;

const AboutStyler = styled.div`
padding-top: 20%;

@media (min-width: 1024px) {
	padding-top: 8%;
}
`

const Line = styled.span`
  border: 1px solid rgb(255, 119, 119);
  width: 10vw;
  display: inline-block;
  margin-bottom: .8vh;

  @media (min-width: 668px) {
    width: 8vw;
    margin-bottom: .6vh;
}

@media (min-width: 1024px) {
  width: 5vw;  
  margin-bottom: .8vh;
}
`

const Dot = styled.span`
  height: 1rem;
  width: 1rem;
  background-color:  rgb(255, 119, 119);
  border-radius: 50%;
  display: inline-block;

  @media (min-width: 668px) {
}

@media (min-width: 1024px) {
}
`