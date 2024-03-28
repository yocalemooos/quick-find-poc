import React from 'react';
export type MainDialogProps = {
    token?: string;
    baseURL?: string;
    hotKey?: string;
};
declare const MainDialog: React.FC<Partial<MainDialogProps>>;
export default MainDialog;
