import { useEffect, useState } from 'react';
import DateTimePicker from 'react-date-picker'

const DatePickerComponent = (props:any) => {
  // const [value, onChangeDate] = useState({name:'', value:(new Date())});
  // const [values, setValues] = useState({date:(new Date()), namedField:''});
  const [date, setDate] = useState(new Date());

  // const initialValues = {
  //   namedField: '',
  //   value: (new Date())
  // };

  // const [values, setValues] = useState(initialValues);
  // const handleChange = (event:any) => {                
  //   setValues({
  //     ...values,                                // spreading the unchanged values
  //     [event.target.name]: event.target.namedField       // changing the state of *changed value*
  //   });
  // }; 

  // useEffect (() => {
  //   localStorage.setItem(props.namedField, JSON.stringify(date))
  // },[date, props.namedField])

  return (
    <div> 
      <p className="label" >{props.label}</p>
      <DateTimePicker
        value={date}
        onChange={setDate}
        onClickDay={props.onClickDay}
        name={props.name}
      />
    </div>
  );
}
export default DatePickerComponent