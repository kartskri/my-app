import {Card, ListGroup} from "react-bootstrap";
import React from "react";
import Page from "./index";

const Graph: React.FC = () => {
    return (
        <>
            <h2>Bollinger Band</h2>
            <p><br/>
                <Page/>
            </p>
            <h3>Inference</h3>
            <p>
                Inference of the graph  is that the stock price is in the range of 100 to 200.
            </p>
        </>
    );
};

export default Graph;

