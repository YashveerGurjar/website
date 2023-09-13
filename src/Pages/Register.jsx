import { styled } from "styled-components";
import HowToRegIcon from '@mui/icons-material/HowToReg';
function Register(){
    return(
        <Container>
            <Wrapper>
                <Form>
                    <h1> Register</h1>
                    <label>First Name</label>
                     <input type="text" placeholder="First Name"/>
                     <label>Last Name</label>
                     <input type="text" placeholder="Last Name"/>
                     <label>User Name</label>
                     <input type="text" placeholder="User Name"/>
                     <label>Email</label>
                     <input type="text" placeholder="Email"/>
                     <label>Password</label>
                     <input type="text" placeholder="Password"/>

                    <Agg>
                      By creating  an account you agree to our <a href="#home">terms & condition</a>.
                    </Agg>

                     <Btn>
                    <Btn1>
                        <HowToRegIcon></HowToRegIcon>
                        Register
                    </Btn1>
                    <Btn2>
                        Cancel
                    </Btn2>
                </Btn>
                </Form>
                
            </Wrapper>
            
        </Container>
    )
}

const Container =styled.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
background-repeat:no-repeat;
background-size:cover;

background-image:url('https://thumbs.dreamstime.com/b/womens-white-t-shirt-mockup-high-heels-grass-cotton-red-wild-sunglasses-lipstick-design-template-tee-print-presentation-245595073.jpg');

`;
const Wrapper =styled.div`
height:80vh;
width:30%;
background-color:transparent;
backdrop-filter: blur(5px);
`;

const Form =styled.form`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

input{
    height:20px;
    width:300px;
    padding:5px;
    margin:10px;
    border:1px solid #88BDBC;
    &:hover{
       border:1px solid transparent;
        background-color:#25435A;
        color:#fff;
    }
}
`;

const Agg =styled.p`
margin-left:30px;
/* padding:5px; */
/* background-color:red; */
width:80%;
`; 

const Btn= styled.div`
 display:flex;
justify-content:space-between;
align-items:center;
width:80%;
margin:10px;
`;

const Btn1 = styled.button`
height:35px;
width:100px;
cursor: pointer;
border:1px solid #25435A;
background-color:#fff;
font-weight:bold;
border-radius:10px;
display:flex;
align-items:center;

&:hover{   
   background-color:#25435A;
   color:#fff;
}
`;

const Btn2 = styled.button`
height:35px;
width:100px;
border:1px solid #25435A;
background-color:#25435A;
font-weight:bold;
border-radius:10px;
transition: all 0.5s ease;
cursor: pointer;
&:hover{  
    color:#fff;
 }
`;


export default Register;