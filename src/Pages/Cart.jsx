import { styled } from "styled-components";
// import Navbar from '../Component/Navbar';
import Footer from "../Component/Footer";
import jens1 from "../Image/jens1.jpg";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Announcement from "../Component/Announcment";
function Cart() {
    return (
        <Container>
            {/* <Navbar /> */}
            <Announcement/>
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top>
                    <TopButton >Continue Shopping </TopButton>

                    <TopTexts>

                        <TopText> Shopping bag (2)</TopText>
                        <TopText> Shopping Whishlist(0) </TopText>

                    </TopTexts>

                    <TopButton type={"right"}>Checkout</TopButton>

                </Top>
                <Buttom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src={jens1}/>
                                <Detail>
                                    <Pname><b>Product:</b>JENS</Pname>
                                    <Pid><b>ID:</b>9012364597</Pid>
                                    <Psize><b>Size:</b>37.5</Psize>
                                    <ProductColor color="lightblue"/>
                                </Detail>
                            </ProductDetail>

                            <PriceDetail>
                                <ProductAmountContainer>
                                      <RemoveIcon />
                                    <ProductAmount>2</ProductAmount>
                                    <AddIcon /> 
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr></Hr>
                        <Product>
                            <ProductDetail>
                                <Image src={jens1}/>
                                <Detail>
                                    <Pname><b>Product:</b>Tishirt</Pname>
                                    <Pid><b>ID:</b>9012364597</Pid>
                                    <Psize><b>Size:</b>37.5</Psize>
                                    <ProductColor color="lightblue"/>
                                </Detail>
                            </ProductDetail>

                            <PriceDetail>
                                <ProductAmountContainer>
                                      <RemoveIcon />
                                    <ProductAmount>1</ProductAmount>
                                    <AddIcon /> 
                                </ProductAmountContainer>
                                <ProductPrice>$30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>   
                        <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                        <SummaryItemText tpe="total"> Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <ButtonContainer>
                        <Button>CHECKOUT NOW</Button>
                        </ButtonContainer>
                    </Summary>
                </Buttom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
const Container = styled.div`
background-color:#fff;
`;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.div`
text-align:center;
font-weight:300;
`;
const Top = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
margin:20px;
`;

const TopButton = styled.button`
padding:10px;
cursor: pointer;
border-radius:10px;
color:${(props) => props.type === "right" ? "black" : "white"};
background-color:${(props) => props.type === "right" ? "red" : "green"};
border:${(props) => props.type === "right" && "2px solid black"};

`;
const TopTexts = styled.div`

`;
const TopText = styled.span`
text-decoration:underline;
cursor: pointer;
margin:0 10px;
`;
const Buttom = styled.div`
display:flex;
justify-content:space-between;
`;
const Info = styled.div`
flex:3;
`;

const Product = styled.div`
display:flex;
justify-content:space-between;
`;

const ProductDetail = styled.div`
flex:2;
display:flex;
`;

const Detail = styled.div`
display:flex;
flex-direction:column;
padding:20px;
justify-content:space-around;
font-size:20px;
font-weight:300;
`;

const Image = styled.img`
width:250px;
height:250px;
`;

const Pname = styled.span`
`;

const Pid = styled.span`
`;

const Psize = styled.span`
`;

const PriceDetail = styled.div`
flex:1;
display:flex;
flex-direction: column;
justify-content:center;
font-size:25px;

align-items:center;
`;
const ProductColor = styled.div`
height:20px;
width:20px;
border-radius:50px;
background-color:${(props)=>props.color};
border:1px solid black;
`;

const ProductAmountContainer= styled.div`
display:flex;
align-items:center;
padding:20px;
`;
const ProductPrice=styled.div`
font-weight:bold;
font-size:30px;`;
const ProductAmount=styled.div`
margin:10px;
`;
const Hr=styled.hr`
/* border:1px dotted grey;
background-color:#e5e1e1;
*/
`; 
const Summary = styled.div`
flex:1;
border:0.5px solid lightgray;
/* height:407px; */
padding:20px;
box-sizing:border-box;
position:relative;
`;
const  SummaryTitle = styled.h1`
font-weight:400;
`;
const  SummaryItem = styled.div`
display:flex;
justify-content:space-between;
`;
const  SummaryItemText = styled.span`
margin:22px 0px;
`;
const  SummaryItemPrice = styled.span`
margin:22px 0px;
`;
const ButtonContainer=styled.div`
text-align:center;
position:absolute;
bottom:0;
width:100%;
`;
const  Button = styled.button`
background-color:green;
height:40px;
width:200px;
font-weight:bold;
&:hover{
    color:#fff;
}
`;

export default Cart;