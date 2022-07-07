import { UserConfig } from 'dooringx-lib';
import 'dooringx-lib/dist/dooringx-lib.esm.css';
import { createContext, useState } from 'react';
import { IRouteComponentProps } from 'umi';
import plugin from '../plugin';
import 'antd/dist/antd.css';
import 'animate.css';

export const config = new UserConfig(plugin);
export const configContext = createContext<UserConfig>(config);
config.i18n = false;
export default function Layout({ children }: IRouteComponentProps) {
  return (
    <configContext.Provider value={config}>{children}</configContext.Provider>
  );
}
