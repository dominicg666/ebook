import actions from './actions';
import { getStorageItem, setStorageItem } from '../../../util/simplePersistence';

import {
  id,
  columnPageName,
  columnPageBody
} from '../../../constants/constants';

export const beginData = () =>
  async function thunk(dispatch) {
    // Before we begin, reset the state of checkout to clear out stale data.
    dispatch(actions.reset());

    const data = await getStorageItem();

    dispatch(
      actions.begin({
        data: data || [],

      })
    );
  };

export const addData = payload =>
  async function thunk(dispatch, getState) {

    const {
      page: {
        data
      }
    } = getState();


    try {
      let page_id = 1
      if (data.length > 0) {
        page_id = (data[data.length - 1].id) + 1;
      }
      const newJson = {};
      newJson[id] = page_id;
      newJson[columnPageName] = payload.title;
      newJson[columnPageBody] = payload.body;

      const newData = [...data, newJson];
      setStorageItem(newData);
      dispatch(
        actions.set({
          data: newData,

        })
      );

    } catch (error) {

      throw error;
    }

  };

export const editData = payload =>
  async function thunk(dispatch, getState) {

    const {
      page: {
        data
      }
    } = getState();

    const { id, editedData } = payload;

    try {
      const newData = data.map((item) => {
        if (id == item.id) {
          item[columnPageName] = editedData[columnPageName];
          item[columnPageBody] = editedData[columnPageBody];
        }
        return item;
      });

      setStorageItem(newData);
      dispatch(
        actions.set({
          data: newData,

        })
      );

    } catch (error) {

      throw error;
    }

  };
