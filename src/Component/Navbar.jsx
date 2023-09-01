import { styled } from 'styled-components';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import 'animate.css';
function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>
                        En
                    </Language>
                    <SeacrContainer>
                        <Input>
                        </Input>
                        <SavedSearchIcon />
                    </SeacrContainer>
                </Left>

                <Center >
                    Fashion Show
                </Center>

                <Right>
                    <Item>
                        Login
                    </Item>

                    <Item>
                        Register
                    </Item>

                    <Item>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4}>
                                <ShoppingCartIcon  style={{color:'orange'}}/>
                            </StyledBadge>
                        </IconButton>
                    </Item>
                </Right>
            </Wrapper>
        </Container>
    )
}
export default Navbar;

const Container = styled.div`

height:40px;
background-color:#25435A ;
color:white;
`;
const Wrapper = styled.div`
display:flex;
height:40px;
justify-content:space-around;
padding:0px 10px;
align-items: center; 
cursor:pointer;


`;
const Left = styled.div`
display:flex;
flex:1;
align-items:center;
`;
const Center = styled.div`
flex:1;
display:flex;
justify-content:center; 
font-size:25px;
font-weight:bold;
color:#fff;
`;
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;


`;
const Language = styled.div`

`;
const SeacrContainer = styled.div`
    border:1px solid white;
    display:flex;
    margin:0px 10px
    
`;
const Input = styled.input`
    border:none;
    &:focus{
        outline:none;
    }  
`; 
const Item = styled.div`
margin:10px;
justify-content:flex-end;

`;
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 5,
        border: `2px solid white `,
        padding: '0 4px',
        color:'orange',
    },
}));