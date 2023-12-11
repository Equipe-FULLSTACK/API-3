import React, { FC, useEffect, useState } from 'react';
import { Button, Modal, Typography, List, ListItem, ListItemText, IconButton, Stack, ButtonBase, Tooltip } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'; // Ícone para excluir
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; // Ícone para adicionar
import CloseIcon from '@mui/icons-material/Close';

interface CustomModalProps {
  isOpen: boolean;
  handleClose: () => void;
  idNumber: number;
}

interface Attachment {
  id: number;
  name: string;
}

const ModalAttachment: FC<CustomModalProps> = ({ isOpen, handleClose, idNumber }) => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await fetch(`http://localhost:5173/anexos/${idNumber}`);
        const data = await response.json();
        setAttachments(data);
      } catch (error) {
        console.error('Erro ao buscar anexos:', error);
      }
    };

    if (isOpen) {
      fetchAttachments();
    }
  }, [isOpen, idNumber]);

  const handleDeleteAttachment = async (attachmentId: number) => {
    try {
      // Lógica para deletar o anexo pelo ID
      await fetch(`sua_api/anexos/${attachmentId}`, { method: 'DELETE' });
      // Atualizar a lista de anexos após a exclusão
      setAttachments((prevAttachments) => prevAttachments.filter((attachment) => attachment.id !== attachmentId));
    } catch (error) {
      console.error('Erro ao deletar o anexo:', error);
    }
  };

  const handleAddAttachment = async () => {
    try {
      const response = await fetch(`http://localhost:5173/adicionar_anexo`, { method: 'POST' });
      const newAttachment = await response.json();

      setAttachments((prevAttachments) => [...prevAttachments, newAttachment]);
    } catch (error) {
      console.error('Erro ao adicionar o anexo:', error);
      alert('Erro ao adicionar anexo.');
    }
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, backgroundColor: '#424242', padding: '0.5rem', color: '#fff' }}>
        <Stack padding={'1rem'}>
          <CloseIcon
            onClick={handleClose}
            sx={{
              position:'absolute',
              right:'1rem',
              top:'1rem',
              cursor: 'pointer',
              ':hover': {
                color:'red'
              },
            }}
          />
          <Typography align='center' variant="h6" component="h2" color="inherit" >
            Anexos
          </Typography>
          <Stack>
            <List>

              {attachments.map((attachment) => (
                <ListItem key={attachment.id}>
                  <ListItemText primary={attachment.name} primaryTypographyProps={{ color: 'inherit' }} />
                  <IconButton onClick={() => handleDeleteAttachment(attachment.id)} edge="end" aria-label="delete">
                    <DeleteOutlineIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
            <Tooltip title='Adicionar Anexo'>
              <button onClick={handleAddAttachment} style={{ display: 'flex', alignItems: 'center', width: '3rem', justifyContent: 'center' }}>
                <AddCircleOutlineIcon />
              </button>
            </Tooltip>


          </Stack>
        </Stack>
      </div>
    </Modal>
  );
};

export default ModalAttachment;
