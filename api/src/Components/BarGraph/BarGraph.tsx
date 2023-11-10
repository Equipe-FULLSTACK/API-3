import React from 'react';
import styled from 'styled-components';

interface BargraphProps {
  value: number;
  minValue: number;
  maxValue: number;
  backgroundColor: string;
  fillBackgroundColor: string;
}

const BargraphWrapper = styled.div<BargraphProps>`
  position: relative;
  width: 100%;
  height: 10px;
  margin: 0.2rem;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  display: flex;
`;


const BargraphFill = styled.div<BargraphProps>`

${props =>
    props.fillBackgroundColor === 'Atrasada'
    ? 'background-color: #ff6961;'
    : props.fillBackgroundColor === 'Concluída'
    ? 'background-color: #54c5cd;'
    : props.fillBackgroundColor === 'Pendente'
    ? 'background-color: #bac8c9;'
    : 'background-color: #fbfb38;'}

  border-radius: 5px;
  width: ${(props) => ((props.value - props.minValue) / (props.maxValue - props.minValue)) * 100}%;

`;

// DINAMIC INDICATOR PERCENT ABSOLUTE POSITION
const ValueIndicator = styled.div<{ fillPercentage: number }>`
  position: absolute;
  top: -20px;
  left: ${(props) => props.fillPercentage}%;
  transform: translateX(-50%);
  padding: 5px 10px;
  font-weight: regular;
  font-size: 8px;
  background-color: transparent;
`;

const Bargraph: React.FC<BargraphProps> = ({ value, minValue, maxValue, backgroundColor, fillBackgroundColor }) => {
  const fillPercentage = ((value - minValue) / (maxValue - minValue)) * 100;
  
  return (
    
    <BargraphWrapper backgroundColor={backgroundColor} className="bargraph">
      <BargraphFill value={value} minValue={minValue} maxValue={maxValue} fillBackgroundColor={fillBackgroundColor} />
      {value !== 1000 && <ValueIndicator fillPercentage={fillPercentage}>{value}%</ValueIndicator>}
    </BargraphWrapper>
  );
};

export default Bargraph;
