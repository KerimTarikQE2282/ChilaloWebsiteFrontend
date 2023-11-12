import React from 'react';
import { connect } from 'react-redux';
import { Typography, Card, CardContent, Paper, Button } from '@mui/material';
import { RemoveVacations } from '../../actions/VacationHandler';

function RemoveVacationComponent({ currentVacation, removeVacation }) {
  console.log(currentVacation);
  const handleDeleteClick = (id) => {
    console.log(id)
    removeVacation(id);
  }

  return (
    <Paper className='RemoveVacation'>
      <CardContent>
        <Typography variant="h5" component="h2">
          Vacation Details
        </Typography>
        <div>
          <Typography variant="h6" component="h3">
            Vacation Name:
          </Typography>
          <Typography variant="body1" component="p">
            {currentVacation?.VacationName}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h3">
            Vacation Place:
          </Typography>
          <Typography variant="body1" component="p">
            {currentVacation?.VacationPlace}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h3">
            Vacation Description:
          </Typography>
          <Typography variant="body1" component="p">
            {currentVacation?.VacationDescription}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h3">
            Vacation Image:
          </Typography>
          <img src={currentVacation?.VacationImage} alt="Vacation" />
        </div>
      </CardContent>
      <Button
        onClick={() => handleDeleteClick(currentVacation.id)}
        variant='contained'
      >
        Remove
      </Button>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    currentVacation: state.VacationReducer.selectedVacation,
  };
};

export default connect(mapStateToProps, { removeVacation: RemoveVacations })(RemoveVacationComponent);