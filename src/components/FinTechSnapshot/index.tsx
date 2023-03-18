import {ListGroup, Row} from "react-bootstrap";
import React from "react";
import {StockOverview} from "../../data/models";
import {API_URL} from "../../constants";
import axios from "axios";
import exp from "constants";
import {fetchStockOverview} from "../../services/api";

interface FinTechSnapshotProps {
    symbol: string;
}
const FinTechSnapshot: React.FC<FinTechSnapshotProps> = ({symbol}) => {
    const [stockOverview, setStockOverview] = React.useState<StockOverview>();

    React.useEffect(() => {
        fetchStockOverview(symbol).then((data) => {
            setStockOverview(data);
        });
    }, [symbol]);

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

export default FinTechSnapshot;