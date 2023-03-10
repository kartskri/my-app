import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "../../components/Navbar";
import {Col, Container, Row} from "react-bootstrap";
import CompanyCard from "../../components/Company";
import Graph from "../../components/Analytics/Sample/graph";
import FinTechSnapshot from "../../components/FinTechSnapshot";
import StockPicker from "../../components/StocksAutocomplete";

function Home() {

    return (
        <div className={"bg-light"}>
            <AppNavbar/>
            <Container>
                <Row>
                    <Col md={4} className={"p-3"}>
                        <CompanyCard/>
                        <FinTechSnapshot/>
                    </Col>
                    <Col md={8} className="p-3">
                        <Graph/>
                        <StockPicker/>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Home;
