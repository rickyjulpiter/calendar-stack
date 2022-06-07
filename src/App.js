import CalendarStack from './Container/CalendarStack';

const App = () => {
  return (
    <CalendarStack handleChangeCalendar={(date) => console.log('hey', date)} />
  );
};

export default App;
