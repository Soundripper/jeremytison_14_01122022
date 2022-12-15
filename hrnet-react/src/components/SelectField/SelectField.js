import Select from 'react-select';
import { department } from '../../data/data';
import { states } from '../../data/data';
import { useEffect, useState } from 'react';

const formatStatesFn = (states) => {
      return states.map(({name: label, name: value, ...rest}) => ({
        label, value, ...rest }));
}

const SelectField = (props) => {
    const [value, setSelectedOption] = useState("")

    useEffect (() => {
        console.log(value.value);
        localStorage.setItem(props.label, value.value)
      },[props.label, value])
    // const handleChange = event => {
    //     console.log(event.target.value);
    //     setSelectedOption(event.target.value);
    //   };

    let render
    if (props.data === 'states'){
        const statesFormated = formatStatesFn(states);
        render = <Select
            className="basic-single"
            classNamePrefix="select"
            name="state"
            options={statesFormated}
            value={value}
            onChange={setSelectedOption}
        />
    }
    if (props.data === 'department'){
        render = <Select
            className="basic-single"
            classNamePrefix="select"
            name="department"
            options={department}
            value={value}
            onChange={setSelectedOption}
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