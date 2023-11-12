import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { GetVacations } from '../../actions/VacationHandler';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const AllPackages = ({ vacationList, GetVacations }) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(() => {
    GetVacations();
  }, []);
  const myvacationList=vacationList.data
 

  
 
  const handleUpdateClick = (vacation) => {
    dispatch({
      type:'selectVacation',
      payload:vacation
  })
  navigate('/updateVacation')
  };

  const handleDeleteClick = (vacation) => {
    dispatch({
      type:'selectVacation',
      payload:vacation
  })
  navigate('/RemoveVacation')
  };

  const handleDetailClick = () => {
    console.log('detail');
  };

  const renderVacationCards = () => {
    return myvacationList?.map((vacation) => (
      <Card key={vacation.id} sx={{ maxWidth: 400 }} className='vacation_cards'>
        <CardMedia
          sx={{ height: 140 }}
          image={`http://127.0.0.1:8000${vacation.VacactionImage}`}
          title={vacation.VacationName}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {vacation.VacationPlace}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {vacation.VacationDescription}
          </Typography>
          <IconButton aria-label='share' onClick={()=>handleUpdateClick(vacation)}>
            <UpgradeIcon />
          </IconButton>
          <IconButton aria-label='share' onClick={()=>handleDeleteClick(vacation)}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label='share' onClick={handleDetailClick}>
            <InfoIcon />
          </IconButton>
        </CardContent>
      </Card>
    ));
  };

  return (
    <div className='AllPackages'>
      <Typography
        variant='h3'
        sx={{
          top: '104px',
          fontFamily: 'Proza Libre',
          fontStyle: 'normal',
          fontWeight: 'normal',
          lineHeight: '24px',
          letterSpacing: '0.18px',
          color: '#172B4D',
          textDecoration: 'underline'
        }}
      >
        All Packages
      </Typography>
      <div className='VacationCardsContainer'>{renderVacationCards()}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  vacationList: state.VacationReducer.vacationList
});

export default connect(mapStateToProps, { GetVacations })(AllPackages);