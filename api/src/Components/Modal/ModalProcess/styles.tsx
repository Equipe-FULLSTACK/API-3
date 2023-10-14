// styles.ts
import styled from 'styled-components';

export const Body = styled.body`
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 400px;
`;

export const ProcessModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ProcessModalTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

export const Status = styled.div`
  background-color: #FF3D57;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
`;

export const MainModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const AddButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #45a049;
  }
`;

export const ArchiveButton = styled.button`
  background-color: #FF3D57;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d32f2f;
  }
`;
