import { BoysProductList } from "./MixProductdata";
import React from "react";
import '../App.css';
import { styled } from "styled-components";
import MixProduct from "./MixProduct";
import ReplyIcon from '@mui/icons-material/Reply';
import { Mobile } from "./Responsive";
function BoysProduct() {
    return (
        <Container>
                <Titlecontainer>
                    <Title> ALL PRODUCT'S
                    <FilterProduct>
                        <SearchColor>
                            <Option disabled selected>
                                Color
                            </Option>
                            <Option>
                                Black
                            </Option>
                                                
                            <Option>
                                White
                            </Option>
                        
                             <Option>
                                red 
                            </Option>
                            <Option>
                                Blue
                            </Option>
                        </SearchColor>
                        <SearchColor>
                            <Option disabled selected>
                                size
                            </Option>
                                                
                            <Option>
                                S
                            </Option>
                            <Option>
                                M
                            </Option>
                        
                             <Option>
                                L
                            </Option>
                            <Option>
                                XL
                            </Option>
                            <Option>
                                XXL
                            </Option>
                            
                        </SearchColor>
                    </FilterProduct>
                    </Title>

                    <SortProduct>

                    </SortProduct>

                </Titlecontainer>

            <Component>

                {
                    BoysProductList.map((product) => (
                        <MixProduct item={product} />))
                }
            </Component>

            <Icon>
                <ReplyIcon className="icon" style={{ border: "2px solid #88BDBC", padding: "5px 30px", cursor: "pointer", transition: "all 0.5s ease" }} ></ReplyIcon>
            </Icon>
        </Container>
    )


}
const Container = styled.div`

 `;

const Component = styled.div`
display:flex;
 margin-top:20px;
 flex-wrap:wrap;

  `;
const Titlecontainer = styled.div`
width:100%;
/* background-color:blue; */
margin-top:30px;
display:flex;
align-items:center;
${Mobile({justifyContent:"space-around"})};

`;

const Title = styled.div`
  color:#f5bf03;
  font-weight:bold;
  font-size:20px;
  /* background-color:red; */
  /* width:150px; */
  display:flex;
  justify-content:center;
  align-items:center; 
  
  
`;

const Icon = styled.div`
    height:30px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;  
    ${Mobile({height:"20px",marginTop:"10px" })};
`;

const FilterProduct = styled.div``;

const SortProduct = styled.div``;

const SearchColor = styled.select`

margin:10px;
padding:5px;
transition: all 0.5s ease;
border-radius:15%;
cursor: pointer;
border:2px solid #88BDBC;

&:hover{
  background-color: #88BDBC;
  
}

`;

const Option = styled.option`
`;


export default BoysProduct;





