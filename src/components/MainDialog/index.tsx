import React from 'react';
import { useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import AutoComplete from '../AutoComplete';
import { Dialog, DialogContent, DialogTitle, Typography, useMediaQuery, useTheme } from '@mui/material';
import useApplication from '../../providers/ApplicationProvider/hooks/use-application';

export type MainDialogProps = {
  token?: string;
  baseURL?: string;
  hotKey?: string;
};

const MainDialog: React.FC<Partial<MainDialogProps>> = (props = {}) => {
  const [open, setOpen] = useState(false);
  const { globalConfig } = useApplication();
  const { hotKey = globalConfig?.getOptions()?.defaultHotkey as string } = props;
  useHotkeys(hotKey, async () => {
    try {
      await globalConfig?.onOpenDialog?.();
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  });
  const { breakpoints } = useTheme();
  const isXs = useMediaQuery(breakpoints.down('sm'));

  const close = () => {
    setOpen(false);
  };

  return (
    <Dialog fullScreen={isXs} maxWidth='md' {...props} open={open} onClose={close}>
      <DialogTitle>
        <Typography>Search</Typography>
      </DialogTitle>
      <DialogContent>
        <AutoComplete onSelect={close} />
      </DialogContent>
    </Dialog>
  );
};
export default MainDialog;
