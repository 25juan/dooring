import { FormMap } from '@/plugin/rightPanel/Input';
import { ComponentItemFactory, createPannelOptions } from 'dooringx-lib';
import { Image as AtImage } from 'antd';

const Image = new ComponentItemFactory(
  'image',
  '图片',
  {
    prop: [
      createPannelOptions<FormMap, 'input'>('input', {
        receive: 'text',
        label: '图片地址',
      }),
    ],
  },
  {
    width: 200,
    height: 55,
    props: {
      src: 'https://www.bing.com/th?id=OHR.HecetaHead_ZH-CN2813876594_UHD.jpg&rf=LaDigue_UHD.jpg&pid=hp',
    },
  },
  ({ props, width, height, ...rest }) => {
    return (
      <AtImage src={props.src} preview={false} width={width} height={height} />
    );
  },
  true,
);
export default Image;
