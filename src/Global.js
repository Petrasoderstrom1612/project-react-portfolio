import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
.innerwrapper{
margin-left: 10vw;
margin-right: 10vw;
padding-bottom: 10vw; 
padding-top: 10vw;
} 

body{
background-color: white;

h1{
font-size: 2rem;
color: white;
margin-left: 10%;
display: flex;
flex-direction: flex-start;
} 

h2{
font-size: 2rem;
margin-left: 10%;
line-height: 2rem;
display: flex;
flex-direction: flex-start;
} 

h3{
text-transform: uppercase;
color: #fff;
background-color: rgb(255, 119, 119);
display: table;
margin: 1rem auto 1rem auto;
text-align: center;
padding: .2rem;
}
h4{
	text-transform: uppercase;
	margin-top: 1rem;
}

h5 {
	text-transform: uppercase;
	text-align: center;
	font-size: 1.3rem;
	color: rgb(255, 119, 119);
	font-weight: 700;
	margin-top: 1rem;
	margin-bottom: .3rem;
}

p {
	text-align: center;
	line-height: 1.4rem;
}
}

@media (min-width: 668px) {
	.innerwrapper{
margin-left: 5vw;
margin-right: 5vw;
} 




h1{
font-size: 4rem;
} 

h2{
font-size: 3rem;
} 

h3{
font-size: 2rem;
} 

h5{
font-size: 1.8rem;
} 

p {
font-size: 1.5rem;
line-height: 3rem;
}

}

@media (min-width: 1024px) {
	.innerwrapper{
margin-left: 17vw;
margin-right: 17vw;
} 


p {
font-size: 1.5rem;
line-height: 2rem;
}

}
`