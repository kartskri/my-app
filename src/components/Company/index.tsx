import {Col, Row} from "react-bootstrap";
import React from "react";
import axios from "axios";
import {API_URL} from "../../constants";
import {Stock} from "../../data/models";

export default function CompanyCard() {
    const [stock, setStock] = React.useState<Stock>({symbol: '', company: '', headquarters: ''});

    React.useEffect(() => {
        async function fetchStock() {
            try {
                const response = await axios.get<Stock>(API_URL + '/lobster/stock/F');
                setStock(response.data)
                return stock;
            } catch (error) {
                console.error(error);
            }
        }

        fetchStock().then(() => {});
    }, []);

    return (
        <>
            {stock.symbol && (
                <Row className={"px-3"}>
                    <h2>{stock.company}</h2>
                    <small className="mb-2 text-muted">{stock.headquarters}</small>
                    <p>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <a href="#">Card Link</a>
                    <a href="#">Another Link</a>
                </Row>
            )}
            <Row>
                <Col><br/></Col>
            </Row>
        </>
    );
}