import { useState } from 'react';
import { Card, CardContent, Container, Typography } from '@mui/material';

import { createCalendarList } from '../../Utils';
import { CalendarListContainer, DisplayFlexSpaceBetween } from './styled';

const CalendarStack = ({ handleChangeCalendar }) => {
  const calendarList = createCalendarList();
  const currentDate = calendarList[0]?.date;
  const [calendarListIndex, setCalendarListIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleCalendarChange = async (date) => {
    setSelectedDate(date);
    handleChangeCalendar(date);
  };

  const CalendarList = () => (
    <CalendarListContainer>
      {calendarList.map((data, index) => (
        <CalendarCard key={index} data={data} />
      ))}
    </CalendarListContainer>
  );

  const CalendarCard = ({ data }) => {
    const { date, day, dayName, monthName } = data;
    return (
      <Card
        sx={{
          width: 80,
          height: 100,
          marginRight: '5px',
          backgroundColor: `${date === selectedDate ? '#363740' : '#ffffff'}`
        }}
        className='glide'
        onClick={() => handleCalendarChange(date)}
      >
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: 10,
              color: `${date === selectedDate ? '#ffffff' : '#000000'}`
            }}
          >
            {dayName}
          </Typography>
          <Typography
            variant='h4'
            component='div'
            sx={{
              fontWeight: 'bolder',
              color: `${date === selectedDate ? '#ffffff' : '#000000'}`
            }}
          >
            {day}
          </Typography>
          <Typography sx={{
            fontWeight: 'normal',
            fontSize: 15,
            color: `${date === selectedDate ? '#ffffff' : '#000000'}`
          }}>
            {monthName}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const moveBehind = async () => {
    let newIndex = calendarListIndex - 1;
    setCalendarListIndex(newIndex);
    await handleCalendarChange(calendarList[newIndex].date);
  };

  const moveAhead = async () => {
    let newIndex = calendarListIndex + 1;
    setCalendarListIndex(newIndex);
    await handleCalendarChange(calendarList[newIndex].date);
  };

  return (
    <>
      <Container fixed>
        <DisplayFlexSpaceBetween>
          <h5 className='moveBehind pointer' onClick={moveBehind}>{'<'}</h5>
          <div className='glider'>
            <CalendarList />
          </div>
          <h5 className='moveAhead pointer' onClick={moveAhead}>{'>'}</h5>
        </DisplayFlexSpaceBetween>
      </Container>
    </>
  );
};

CalendarStack.defaultProps = {
  handleChangeCalendar: () => console.log('date change!')
};

export default CalendarStack;
