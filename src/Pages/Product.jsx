import React from "react";
import Navbar from '../Component/Navbar';
import Footer from "../Component/Footer";
import { styled } from "styled-components";
import shirt1 from '../Image/shirt1.jpg';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function SingleProduct() {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={shirt1} />

                </ImageContainer>
                <InfoContainer>
                    <Info1>
                        Being Human
                    </Info1>
                    <Info2>
                        Being Human Navy Blue Cotton Slim Fit Checks Shirt
                    </Info2>
                    <Info3>
                    ₹1259  
                   
                    <Mrp>                        
                        MRP:
                    </Mrp>
                    <Rate>
                    ₹2799
                    </Rate>
                    <Percentoff>
                            55% OFF
                    </Percentoff>
                    </Info3>
                    
                    <Info4>
                        Inclusive of all taxes
                    </Info4>
                    Select Color
                    <Color>
                    
                        <Color1>
                        </Color1>

                        <Color2>
                        </Color2>

                        <Color3>
                        </Color3>
                    </Color>
                    <ValueContainer>
                    <AddIcon></AddIcon><Value>1</Value>
                    <RemoveIcon></RemoveIcon>
                    </ValueContainer>

                    <SizeContainer>
                        Select Size
                    
                    <SizeType>
                        <Size>S</Size>
                        <Size>M</Size>
                        <Size>L</Size>
                        <Size>XL</Size>
                        <Size>XXL</Size>
                    </SizeType>
                    </SizeContainer>
                    <DESC>
                        Model is 1'0'/185 cms and is wearing size M
                        100% COTTON, Machine wash 
                    </DESC>
                    <Btn>
                    <Btn1>
                        Buy Now
                    </Btn1>
                    <Btn2>
                    <IconButton aria-label="cart">
                           
                                <ShoppingCartIcon  style={{color:'#000' }}/>
                            
                        </IconButton>
                        Add To Cart
                    </Btn2>
                </Btn>
                </InfoContainer>
              
            </Wrapper>
            <Footer />
        </Container>

    )


}
const Container = styled.div``;

const Wrapper = styled.div`
display:flex;
height:100vh;

`;

const ImageContainer = styled.div`
flex:1;
height:100%;
width:100%;
/* background-color:red; */
`;

const Image = styled.img`
height:90vh;
width:80%;
`;


const InfoContainer = styled.div`
flex:1;
/* background-color:pink; */
height:100%;
width:100%;

`;

const Info1 = styled.h2`

`;
const Info2 = styled.p`
font-weight:300;
`;

const Info3 = styled.div`
display:flex;
/* justify-content:center; */
align-items:center;
`;
const Mrp= styled.div`
font-weight:200;
display:flex;
align-items:center;
padding-left:5px;
`;
const Rate= styled.p`
font-weight:100;
text-decoration: line-through;
display:flex;
align-items:center;
`;

const Percentoff= styled.div`
font-weight:bold;
color:#219c1a;
`;
const Info4 = styled.p`
font-weight:100;
`;

const SizeContainer= styled.div`
display: flex;
flex-direction: column;
`;

const SizeType= styled.div`
display:flex;
justify-content:space-between;
width:50%;
padding:20px 0px ;
`;

const Size= styled.div`
height:30px;
width:35px;
display: flex;
justify-content: center;
align-items: center;
border:1px solid #25435A ;
border-radius: 10px;
align-items:center;
cursor: pointer;
background-color:white;
  transition: all 0.5s ease;
&:hover{
    background-color: #88BDBC;
    border:1px solid transparent;
}
`;

const DESC= styled.div`
font-weight:300;
`;

const Btn= styled.div`
display:flex;
justify-content:space-between;
padding-right:100px;
padding-top:50px;
`;

const Btn1 = styled.button`
height:50px;
width:200px;
cursor: pointer;
border:1px solid #88BDBC;
background-color:#fff;
font-weight:bold;
border-radius:10px;
/* transition: all 0.5s ease; */
&:hover{
    
   background-color:#88BDBC;
}

`;
const Btn2 = styled.button`
height:50px;
width:200px;
border:1px solid #88BDBC;
background-color:#88BDBC;
font-weight:bold;
border-radius:10px;
transition: all 0.5s ease;
cursor: pointer;

&:hover{
    color:#000;
    background-color:#fff;
    /* border:1px solid #88BDBC; */
}
`;
const Color=styled.div`
display:flex;
align-items:center;
height:50px;
width:100%;

`;

const Color1=styled.div`
background-color:#000;  
height:20px;
width:20px;
border-radius:50%;
border:1px solid black;
margin:5px;
transition: all 0.5s ease;
cursor: pointer;
`;
const Color2=styled.div`
background-color:white;
height:20px;
width:20px;
border-radius:50%;
border:1px solid black;
cursor: pointer;
`;

const Color3=styled.div`
background-color:#25435A;
height:20px;
width:20px;
border-radius:50%;
border:1px solid black;
margin:5px;
cursor: pointer;
`;
const ValueContainer=styled.div`
display:flex;
align-items:center;
`;
const Value=styled.div`
border-radius:10%;
background-color:green;
width:15px;
text-align:center;
`;


export default SingleProduct;