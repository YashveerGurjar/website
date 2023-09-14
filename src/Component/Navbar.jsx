import { styled } from 'styled-components';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Mobile } from './Responsive';
import { Pad } from './Responsive';


import 'animate.css';
function Navbar() {
    return (
        <Container>
            <Wrapper>
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
                            <StyledBadge badgeContent={1}>
                                <ShoppingCartIcon  style={{color:'orange' }}/>
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
${Mobile({height:"50px"})};


`;

const Center = styled.div`

/* display:flex; */
font-size:25px;
font-weight:200;
letter-spacing:1px;
color:#fff;
font-family: 'Rye', cursive;
text-shadow:3px 4px grey;
${Mobile({fontSize:"1rem"})};
${Pad({fontSize:"12px"})};


`;
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;


`;

const Item = styled.div`
margin:10px;
justify-content:flex-end;
margin-right:50px;
${Mobile({margin:"5px"})};
${Pad({fontSize:"12px"})};

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