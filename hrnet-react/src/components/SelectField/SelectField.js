import Select from 'react-select';
import { department } from '../../data/data';
import { states } from '../../data/data';
// import { useState } from 'react';

const formatStatesFn = (states) => {
      return states.map(({name: label, name: value, ...rest}) => ({
        label, value, ...rest }));
}

const SelectField = (props) => {
    // const [value, setSelectedOption] = useState("")

    let render
    if (props.data === 'states'){
        const statesFormated = formatStatesFn(states);
        render = <Select
            className="basic-single"
            classNamePrefix="select"
            name={props.name}
            options={statesFormated}
            value={props.value}
            onChange={props.onChange}
        />
    }
    if (props.data === 'department'){
        render = <Select
            className="basic-single"
            classNamePrefix="select"
            name={props.name}
            options={department}
            value={props.value}
            onChange={props.onChange}
        />
    }
    return (
        <>
            <div className='label'>{props.label}</div>
            <div>{render}</div>
        </>
    )
}

export default SelectField