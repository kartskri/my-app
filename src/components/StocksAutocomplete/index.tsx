import React, {useState} from "react";
import {Typeahead} from "react-bootstrap-typeahead";
import axios from "axios";
import {API_URL} from "../../constants";
import exp from "constants";
import {Company} from "../../data/models";

interface StockPickerProps {
    title: string;
    companyChanged: (company: Company) => void;
}

const StockPicker: React.FC<StockPickerProps> = ({title, companyChanged}) => {
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

        fetchCompanies().then(r => {});
    }, []);

    const handleOptionSelected = (selected: any) => {
        if (selected && selected.length > 0) {
            setCompany(selected[0]);
            companyChanged(selected[0]);
        } else {
            setCompany(undefined);
        }
    };


    return (
        <>
            <h1>{title}</h1>
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

export default StockPicker;