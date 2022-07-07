import { ComponentItemFactory } from 'dooringx-lib';

const Swiper = new ComponentItemFactory(
  'swiper',
  '轮播图',
  {},
  {
    width: 200,
    height: 55,
  },
  ({ props }) => {
    console.log('swiper......', props);
    return <div>测试</div>;
  },
  true,
);
export default Swiper;
