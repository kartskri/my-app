import {ListGroup, Row} from "react-bootstrap";
import React from "react";
import {StockOverview} from "../../data/models";
import {API_URL} from "../../constants";
import axios from "axios";
import exp from "constants";

interface FinTechSnapshotProps {
    symbol: string;
}
const FinTechSnapshot: React.FC<FinTechSnapshotProps> = ({symbol}) => {
    const [stockOverview, setStockOverview] = React.useState<StockOverview>();

    React.useEffect(() => {
        async function fetchStockOverview() {
            try {
                const response = await axios.get<StockOverview>(API_URL + '/lobster/stockoverview/' + symbol);
                setStockOverview(response.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchStockOverview().then(() => {});
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