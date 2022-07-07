import { HighlightOutlined } from '@ant-design/icons';
import { Image } from 'antd';
import { InitConfig } from 'dooringx-lib';
import { LeftRegistComponentMapItem } from 'dooringx-lib/dist/core/crossDrag';
import Input from './rightPanel/Input';

const LeftRegistMap: LeftRegistComponentMapItem[] = [
  {
    type: 'basic',
    component: 'image',
    img: '',
    imgCustom: (
      <Image
        preview={false}
        width={40}
        src={require('./components/Image/icon.png')}
      />
    ),
    displayName: '图片',
    urlFn: () => import('./components/Image'),
  },
  {
    type: 'basic',
    component: 'swiper',
    img: '',
    imgCustom: (
      <Image
        preview={false}
        width={40}
        src={require('./components/Swiper/icon.png')}
      />
    ),
    displayName: '轮播图',
    urlFn: () => import('./components/Swiper'),
  },
];

export const defaultConfig: Partial<InitConfig> = {
  leftAllRegistMap: LeftRegistMap,
  leftRenderListCategory: [
    {
      type: 'basic',
      icon: <HighlightOutlined />,
      displayName: '基础',
    },
  ],
  initComponentCache: {},
  rightRenderListCategory: [
    {
      type: 'prop',
      icon: <div style={{ width: 50, textAlign: 'center' }}>属性</div>,
    },
  ],
  initFunctionMap: {},
  initCommandModule: [],
  initFormComponents: {
    input: Input,
  },
};

export default defaultConfig;
