import { FC } from 'react';
import { Skeleton } from 'antd';
import './index.css';

interface TitleProps {
  text: string;
  loading: boolean;
}

export const Title: FC<TitleProps> = ({ text, loading }) => (
  <Skeleton
    active
    paragraph={false}
    loading={loading}
    className="title__skeleton"
  >
    <h1 className="title__text">{text}</h1>
  </Skeleton>
);
