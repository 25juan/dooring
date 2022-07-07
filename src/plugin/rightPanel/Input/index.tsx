import { Col, Row } from 'antd';
import { deepCopy, UserConfig } from 'dooringx-lib';
import { CreateOptionsRes } from 'dooringx-lib/dist/core/components/formTypes';
import { IBlockType } from 'dooringx-lib/dist/core/store/storetype';
import React, { useMemo } from 'react';

export interface FormBaseType {
  receive?: string;
}
export interface FormInputType extends FormBaseType {
  label: string;
}

export interface FormMap {
  input: FormInputType;
}

export interface IInputProps {
  data: CreateOptionsRes<FormMap, 'input'>;
  current: IBlockType;
  config: UserConfig;
}
const Input: React.FC<IInputProps> = ({ data, config, current }) => {
  const option = useMemo(() => {
    return data?.option || {};
  }, [data]);
  return null;
  const store = config?.getStore();
  return (
    <Row>
      <Col span={6} style={{ lineHeight: '30px' }}>
        {(option as any)?.label}：
      </Col>
      <Col span={18}>
        <Input
          value={current?.props[(option as any).receive] || ''}
          onChange={(e) => {
            const receive = (option as any).receive;
            const clonedata = deepCopy(store.getData());
            const newblock = clonedata.block.map((v: IBlockType) => {
              if (v.id === current.id) {
                v.props[receive] = e.target.value;
              }
              return v;
            });
            store.setData({ ...clonedata, block: [...newblock] });
          }}
        ></Input>
      </Col>
    </Row>
  );
};
export default Input;
