import { FC } from 'react';
import { Skeleton } from 'antd';
import './index.css';

export const DriversSkileton: FC = () => (
  <div className="drivers__skeleton-container">
    <Skeleton active paragraph={false} className="drivers__skeleton-item" />
    <Skeleton active paragraph={false} className="drivers__skeleton-item" />
    <Skeleton active paragraph={false} className="drivers__skeleton-item" />
    <Skeleton
      active
      paragraph={false}
      className="drivers__skeleton-item drivers__skeleton-grid"
    />
    <Skeleton
      active
      paragraph={false}
      className="drivers__skeleton-item drivers__skeleton-grid"
    />
    <Skeleton
      active
      paragraph={false}
      className="drivers__skeleton-item drivers__skeleton-grid"
    />
    <Skeleton
      active
      paragraph={false}
      className="drivers__skeleton-item drivers__skeleton-grid"
    />
  </div>
);
