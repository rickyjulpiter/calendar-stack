import CalendarStack from './Container/CalendarStack';

const App = () => {
  return (
    <CalendarStack handleChangeCalendar={(date) => console.log('date', date)} />
  );
};

export default App;
