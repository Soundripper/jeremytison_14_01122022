import { useState } from 'react';
import DateTimePicker from 'react-date-picker'

function DatePicker(props:any) {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <p className="label">{props.label}</p>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default DatePicker