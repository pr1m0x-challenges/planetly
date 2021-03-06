import { MultiStepForm } from './Components/MultiStepForm/MultiStepForm';
import { Box, Container } from '@material-ui/core';

function App() {
  return (
    <Container maxWidth="xl">
      <Box my={12}></Box>
      <MultiStepForm />
    </Container>
  );
}

export default App;
