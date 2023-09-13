import { styled } from "styled-components";

function MixProduct({item}){
    return (
      
        <Container>
        <Wrapper>
            <Image src={item.img}/>
           
        </Wrapper>
    </Container>
    )
}
 
const Container = styled.div`
flex:1;
`;

const Wrapper = styled.div`
height:300px;
width: 320px;
flex:1;
overflow: visible;
transition:all 0.5s ease;
justify-content:space-between;  
align-items:center;


`;
const Image = styled.img`
height:250px;
width:230px;
transition:all 0.5s ease;
z-index: 999;
box-shadow:2px 3px grey;

&:hover{ 
    opacity:0.7;
    height:280px;
    width:250px;
    
}
`;


export default MixProduct;