import type { Tag } from './types';
import type { Params } from 'ahooks/lib/usePagination/types';

import { message } from 'antd';

import request from '../../utils/http';

const getTags = async (pageParams: Params[0], params: { id?: string; }) => {
  const { data } = await request<{ list: Tag[], total: number }>('api/tag/list', {
    ...params,
    ...pageParams
  });
  // {list: [], total: 0}
  return data;
};

async function addTag(params: Omit<Tag, 'id'>) {
  const { msg } = await request<null>('api/tag/add', params);

  message.success(msg);
}

async function deleteTag(params: Pick<Tag, 'id'>) {
  const { msg } = await request<null>('api/tag/delete', params);

  message.success(msg);
}

async function updateTag(params: Tag) {
  const { msg } = await request<null>('api/tag/update', params);

  message.success(msg);
}

export { getTags, addTag, deleteTag, updateTag };