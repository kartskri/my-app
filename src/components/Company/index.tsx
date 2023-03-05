import {Col, Row} from "react-bootstrap";
import React from "react";

export default function CompanyCard() {
    return (
        <>
            <Row className={"px-3"}>
                <h2>Apple Computers</h2>
                <small className="mb-2 text-muted">AAPL</small>
                <p>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </p>
                <a href="#">Card Link</a>
                <a href="#">Another Link</a>
            </Row>
            <Row>
                <Col><br/></Col>
            </Row>
        </>
    );
}