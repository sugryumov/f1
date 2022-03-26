import { LoadingStatuses } from '@/enums/statuses';

export type TStatuses =
  | LoadingStatuses.BEGIN
  | LoadingStatuses.PENDING
  | LoadingStatuses.FAILURE
  | LoadingStatuses.SUCCESS;
