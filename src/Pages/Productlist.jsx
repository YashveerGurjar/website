import React from "react";
// import { ReactDOM } from "react";
// import Navbar from '../Component/Navbar';
import Announcement from '../Component/Announcment';
import Footer from "../Component/Footer";
import { styled } from "styled-components";
import BoysProduct from "../Component/AllBoysproduct";
import { Mobile } from "../Component/Responsive";
function ProductList() {
    return (
        <Container>

            <Announcement />
            {/* <Navbar /> */}
            <BoysProduct />
            <Footer />

        </Container>
    )


}
const Container = styled.div`

${Mobile({ })};
`;


export default ProductList;