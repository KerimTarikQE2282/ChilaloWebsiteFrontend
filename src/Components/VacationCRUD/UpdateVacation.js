import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateVacation } from '../../actions/VacationHandler';
import { connect } from 'react-redux';

function UpdateVacation({ currentVacation, updateVacation }) {
  const [Vacation, setVacation] = React.useState({
    VacationName: currentVacation.VacationName,
    VacationPlace: currentVacation.VacationPlace,
    VacationDescription: currentVacation.VacationDescription,
  });
  const [VacationImage, setVacationImage] = React.useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'VacationImage') {
      setVacationImage({
        image: e.target.files,
      });
    } else {
      setVacation({
        ...Vacation,
        [e.target.name]: e.target.value,
      });
    }
  };

  const { VacationName, VacationPlace, VacationDescription } = Vacation;
  const image = VacationImage;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(VacationName, VacationPlace, VacationDescription);
    updateVacation(currentVacation.id,VacationName, VacationPlace, VacationDescription);
  };
  console.log(Vacation)
  return (
    <div className='UpdateVacationForm'>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder='Vacation Name'
          name='VacationName'
          value={VacationName}
          onChange={handleChange}
        />
        <TextField
          placeholder='Vacation Place'
          name='VacationPlace'
          value={VacationPlace}
          onChange={handleChange}
        />
        <TextField
          placeholder='Vacation Description'
          name='VacationDescription'
          value={VacationDescription}
          onChange={handleChange}
        />
      
        <Button variant='contained' type='submit'>
          Hire!
        </Button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentVacation: state.VacationReducer.selectedVacation,
});

export default connect(mapStateToProps, { updateVacation })(UpdateVacation);