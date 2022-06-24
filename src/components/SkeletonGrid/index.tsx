import { FC } from 'react';
import { Skeleton } from 'antd';
import './index.css';

export const SkeletonGrid: FC = () => (
  <div className="skeleton__grid">
    <Skeleton active paragraph={false} className="skeleton__grid-item" />
    <Skeleton active paragraph={false} className="skeleton__grid-item" />
    <Skeleton active paragraph={false} className="skeleton__grid-item" />
    <Skeleton
      active
      paragraph={false}
      className="skeleton__grid-item skeleton__grid-span"
    />
    <Skeleton
      active
      paragraph={false}
      className="skeleton__grid-item skeleton__grid-span"
    />
    <Skeleton
      active
      paragraph={false}
      className="skeleton__grid-item skeleton__grid-span"
    />
    <Skeleton
      active
      paragraph={false}
      className="skeleton__grid-item skeleton__grid-span"
    />
  </div>
);
