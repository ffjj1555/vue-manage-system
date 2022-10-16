// import { number } from '@intlify/core-base';
import { PropType } from 'vue';

export interface BasicProps {
  width: string;
  height: string;
}
export const basicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '180px',
  },
};
export const AVbasicProps = {
  width: {
    type: String as PropType<string>,
    default: '100%',
  },
  height: {
    type: String as PropType<string>,
    default: '280px',
  },
  house_type_id: {
    // type: number as PropType<number>,
    default: 0,
  },
  mag: {
    type: String as PropType<string>,
    default: '无信息',
  },
};
export const TableData = {
  price: {
        default: 100,
  },
  id: {
        default: 1,
  },
};
