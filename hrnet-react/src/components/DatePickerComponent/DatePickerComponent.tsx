import { useState } from 'react';
import DateTimePicker from 'react-date-picker'

const DatePickerComponent = (props:any) => {
  const [date, setDate] = useState(new Date());

  return (
    <div> 
      <p className="label" >{props.label}</p>
      <DateTimePicker
        value={date}
        onChange={setDate}
        onClickDay={props.onClickDay}
        name={props.name}
        format="MM-dd-y"
      />
    </div>
  );
}
export default DatePickerComponent