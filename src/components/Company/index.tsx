import {Col, Row} from "react-bootstrap";
import React from "react";
import axios from "axios";
import {API_URL} from "../../constants";
import {Stock} from "../../data/models";
import {fetchStock} from "../../services/api";

interface CompanyCardProps {
    symbol: string;
}

const CompanyCard: React.FC<CompanyCardProps> = ({symbol}) => {
    const [stock, setStock] = React.useState<Stock>({symbol: symbol, company: '', headquarters: ''});
    React.useEffect(() => {
        fetchStock(symbol).then((data) => {
            setStock(data);
        });
    }, [symbol]);



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

export default CompanyCard;