import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddVacation } from '../../actions/VacationHandler'

function AddEvent() {
  const dispatch = useDispatch();

  const [Event, setEvent] = useState({});
  const [VacationImage, setVacationImage] = useState(null);

  const HandleImageChange = (e) => {
    setVacationImage(e.target.files[0]);
  }

  const HandleChange = (e) => {
    setEvent(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddVacation(Event.VacationName, Event.VacationPlace, Event.VacationDescription, VacationImage));
  }

  return (
    <div className='AddEvent'>
      <form onSubmit={HandleSubmit}>
        <TextField
          label='Event Name'
          variant='outlined'
          className='FormElement'
          name='VacationName'
          onChange={HandleChange}
          style={{ marginTop: '20px', width: '500px' }}
        />
        <br />
        <TextField
          label='Event Location'
          variant='outlined'
          name='VacationPlace'
          onChange={HandleChange}
          style={{ marginTop: '20px', width: '500px' }}
        />
        <br />
        <TextField
          label='Event Image Link'
          variant='outlined'
          name='EventimageLink'
          onChange={HandleChange}
          style={{ marginTop: '20px', width: '500px' }}
        />
        <br />
        <TextField
          label='Event Description'
          variant='outlined'
          multiline
          rows={4}
          sx={{ width: '500px' }}
          className='FormElement'
          name='VacationDescription'
          onChange={HandleChange}
          style={{ marginTop: '20px', width: '500px' }}
        />
        <br />
        <input
          type='file'
          name='VacationImage'
          onChange={HandleImageChange}
        />
        <br />
        <Button
          variant='outlined'
          type='submit'
          color='primary'
        >
          submit
        </Button>
      </form>
    </div>
  )
}

export default AddEvent;