import React, {useState} from "react";
import {Typeahead} from "react-bootstrap-typeahead";
import axios from "axios";
import {API_URL} from "../../constants";

interface Company {
    symbol: string;
    company: string;
}

export default function StockPicker() {
    const [company, setCompany] = useState<Company>();
    const [companies, setCompanies] = React.useState<Company[]>([]);

    React.useEffect(() => {
        async function fetchCompanies() {
            try {
                const response = await axios.get<Company[]>(API_URL + '/lobster/stocks');
                setCompanies(response.data);
                return response.data;
            } catch (error) {
                console.error(error);
            }
        }

        fetchCompanies().then(r => console.log(r));
    }, []);

    const handleOptionSelected = (selected: any) => {
        setCompany(selected[0]);
    };


    return (
        <>
            {companies && (
                <Typeahead
                    id="typeahead-example"
                    labelKey="company"
                    options={companies}
                    placeholder="Select an option"
                    selected={company ? [company] : []}
                    onChange={handleOptionSelected}
                />
            )}
        </>
    )
}