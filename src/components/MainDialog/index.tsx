import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { Modal, ModalClose, ModalDialog, ModalProps, Typography, useTheme } from '@mui/joy';
import useMediaQuery from '@mui/material/useMediaQuery';
import AutoComplete from '../AutoComplete';

const MainDialog: React.FC<Partial<ModalProps>> = (props) => {
  const [open, setOpen] = useState(false);
  useHotkeys('ctrl+k', () => setOpen(true));
  const { breakpoints } = useTheme();
  const isXs = useMediaQuery(breakpoints.down('sm'));

  return (
    <Modal {...props} open={open} onClose={() => setOpen(false)}>
      <ModalDialog size='lg' layout={isXs ? 'fullscreen' : 'center'}>
        <ModalClose />
        <Typography>Search</Typography>
        <AutoComplete />
      </ModalDialog>
    </Modal>
  );
};
export default MainDialog;
