// components/Spinner.tsx
import React from 'react';
import styled from 'styled-components';

const SpinnerOverlay = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7); /* Fondo semitransparente */
  z-index: 9999; /* Aseguramos que esté por encima de todo */
`;

const SpinnerContainer = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.2); /* Light grey */
  border-top: 8px solid var(--primary-color); /* Celeste brillante */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Spinner: React.FC = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
