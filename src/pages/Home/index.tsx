import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "../../components/Navbar";
import {Col, Container, Row} from "react-bootstrap";
import CompanyCard from "../../components/Company";
import Graph from "../../components/Analytics/Sample/graph";
import FinTechSnapshot from "../../components/FinTechSnapshot";
import StockPicker from "../../components/StocksAutocomplete";
import {Company} from "../../data/models";

const Home: React.FC = () => {
    const [company, setCompany] = React.useState<Company>({symbol: 'AAPL', company: 'Apple Inc.'});

    const handleCompanyChange = (company: Company) => {
        setCompany(company);
    };

    return (
        <div className={"bg-light"}>
            <AppNavbar/>
            <h2>{company?.company}</h2>
            <Container>
                <Row>
                    <Col md={4} className={"p-3"}>
                        <CompanyCard symbol={company.symbol} />
                        <FinTechSnapshot symbol={company.symbol}/>
                    </Col>
                    <Col md={8} className="p-3">
                        <Graph/>
                        <StockPicker title="Stock Picker 2" companyChanged={handleCompanyChange}/>
                        <hr/>
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default Home;
