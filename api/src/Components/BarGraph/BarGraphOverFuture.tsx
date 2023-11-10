import React, { useState } from 'react';
import styled from 'styled-components';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

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
  ${(props) =>
    props.fillBackgroundColor === 'Atrasada'
      ? 'background-color: #ff6961;'
      : props.fillBackgroundColor === 'Concluída'
      ? 'background-color: #54c5cd;;'
      : 'background-color: #fbfb38;'}

  border-radius: 5px;
  width: ${(props) => ((props.value - props.minValue) / (props.maxValue - props.minValue)) * 100}%;
`;

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
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <BargraphWrapper
      backgroundColor={backgroundColor}
      className="bargraph"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
    >
      <BargraphFill value={value} minValue={minValue} maxValue={maxValue} fillBackgroundColor={fillBackgroundColor} />
      {value !== 1000 && <ValueIndicator fillPercentage={fillPercentage}>{value}%</ValueIndicator>}
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        BackdropProps={{ style: { backgroundColor: 'transparent' } }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>I use Popover.</Typography>
      </Popover>
    </BargraphWrapper>
  );
};

export default Bargraph;
