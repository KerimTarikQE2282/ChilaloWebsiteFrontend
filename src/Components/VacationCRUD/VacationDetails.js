import React from 'react';
import { connect } from 'react-redux';
import { Typography, Card, CardContent, Paper } from '@mui/material';

function RemoveVacation({ currentVacation }) {
  console.log(currentVacation);

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
            {currentVacation.VacationName}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h3">
            Vacation Place:
          </Typography>
          <Typography variant="body1" component="p">
            {currentVacation.VacationPlace}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h3">
            Vacation Description:
          </Typography>
          <Typography variant="body1" component="p">
            {currentVacation.VacationDescription}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h3">
            Vacation Image:
          </Typography>
          <img src={currentVacation.VacationImage} alt="Vacation" />
        </div>
      </CardContent>
     
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    currentVacation: state.VacationReducer.selectedVacation,
  };
};

export default connect(mapStateToProps, {})(RemoveVacation);