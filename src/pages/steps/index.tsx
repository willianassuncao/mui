import React, { useState } from 'react';
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  styled,
} from '@mui/material';

const CustomStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    display: 'none',
  },
}));

interface FormData {
  name: string;
  email: string;
}

function Step1({ onNext }: { onNext: () => void }) {
  return (
    <div>
      {/* Conteúdo da etapa 1 */}
      <Button variant="contained" color="primary" onClick={onNext}>
        Próximo
      </Button>
    </div>
  );
}

function Step2({
  onNext,
  onPrev,
}: {
  onNext: () => void;
  onPrev: () => void;
}) {
  return (
    <div>
      {/* Conteúdo da etapa 2 */}
      <Button variant="contained" color="primary" onClick={onNext}>
        Próximo
      </Button>
      <Button variant="contained" color="primary" onClick={onPrev}>
        Anterior
      </Button>
    </div>
  );
}

function Step3({
  onSubmit,
  onPrev,
}: {
  onSubmit: () => void;
  onPrev: () => void;
}) {
  return (
    <div>
      {/* Conteúdo da etapa 3 */}
      <Button variant="contained" color="primary" onClick={onSubmit}>
        Enviar
      </Button>
      <Button variant="contained" color="primary" onClick={onPrev}>
        Anterior
      </Button>
    </div>
  );
}

function MultiStepForm() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({ name: '', email: '' });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    // Lógica de envio dos dados aqui
    console.log('Dados enviados:', formData);
  };

  const steps = ['Passo 1', 'Passo 2', 'Passo 3'];

  return (
    <div className="progress-container">
      <CustomStepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </CustomStepper>

      <div className={`progress-bar step${activeStep}`} />

      {activeStep === 0 && <Step1 onNext={handleNext} />}
      {activeStep === 1 && <Step2 onNext={handleNext} onPrev={handlePrev} />}
      {activeStep === 2 && (
        <Step3 onSubmit={handleSubmit} onPrev={handlePrev} />
      )}
    </div>
  );
}

export default MultiStepForm;