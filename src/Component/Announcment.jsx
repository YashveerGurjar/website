import styled from "@emotion/styled";
import 'animate.css';

function Announcement(){
    return(
        <Container>
            
               <span className="animate__animated animate__zoomIn animate__infinite infinite">Super Deal! Free Shipping on Order Over $50</span> 
        </Container>
    )
}
export default Announcement;

const Container=styled.div`
display:flex;
background-color:#88BDBC;
justify-content:center;
color:white;

`;
