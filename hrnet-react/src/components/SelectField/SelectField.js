import Select from 'react-select';
import { department } from '../../data/data';
import { states } from '../../data/data';

const formatStatesFn = (states) => {
      return states.map(({
        name: label,
        name: value,
        ...rest
      }) => ({
        label,
        value,
        ...rest
      }));
}

const SelectField = (props) => {
    let render
    if (props.data === 'states'){
        const statesFormated = formatStatesFn(states);
        // console.log(statesFormated);
        render = <Select
        // theme={(theme) => ({
        //     ...theme,
        //     borderRadius: 10,
        //     colors: {
        //       ...theme.colors,
        //       primary25: 'blue',
        //       primary: 'black',
        //     },
        // })}
        className="basic-single"
        classNamePrefix="select"
        // defaultValue={statesFormated[0]}
        name="state"
        options={statesFormated}
        />
    }
    if (props.data === 'department'){
        render = <Select
        className="basic-single"
        classNamePrefix="select"
        // defaultValue={department[0]}
        name="department"
        options={department}
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