import {ListGroup, Row} from "react-bootstrap";
import React from "react";
import {StockOverview} from "../../data/models";
import {API_URL} from "../../constants";
import axios from "axios";

export default function FinTechSnapshot() {
    const [stockOverview, setStockOverview] = React.useState<StockOverview>();

    React.useEffect(() => {
        async function fetchStockOverview() {
            try {
                const response = await axios.get<StockOverview>(API_URL + '/lobster/stockoverview/META');
                setStockOverview(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchStockOverview().then(() => {});
    }, []);

    return (
        <>
            {stockOverview && stockOverview.symbol && (
                <Row>
                    <ListGroup variant={"flush"}>
                        <ListGroup.Item>{stockOverview.beta}</ListGroup.Item>
                        <ListGroup.Item>{stockOverview.address}</ListGroup.Item>
                        <ListGroup.Item>{stockOverview.asset_type}</ListGroup.Item>
                        <ListGroup.Item>{stockOverview.book_value}</ListGroup.Item>
                        <ListGroup.Item>{stockOverview.asset_type}</ListGroup.Item>
                        <ListGroup.Item>{stockOverview.country}</ListGroup.Item>
                    </ListGroup>
                </Row>
            )}
        </>
    );
}