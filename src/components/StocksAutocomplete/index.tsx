import React, { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

type Option = {
    id: number;
    label: string;
};

type Props = {
    options: Option[];
};

const TypeaheadExample: React.FC = () => {

    var options: Option[] = [];
    options.push({id: 1, label: "Facebook"});
    options.push({id: 2, label: "Google"});

    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const handleOptionSelected = (selected: any) => {
        setSelectedOption(selected[0]);
        console.log(selected[0]);
    };


    return (
        <Typeahead
            id="typeahead-example"
            labelKey="label"
            options={options}
            placeholder="Select an option"
            selected={selectedOption ? [selectedOption] : []}
            onChange={handleOptionSelected}
        />
    );
};

export default TypeaheadExample;
