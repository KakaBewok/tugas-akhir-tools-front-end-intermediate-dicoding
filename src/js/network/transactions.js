import axios from 'axios';
import Utils from '../utils/utils';
import ApiEndpoint from '../config/api-endpoint';

const Transactions = {
  async getAll() {
    return await axios.get(ApiEndpoint.GET_ALL_STORY, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken('token')}`,
      },
    });
  },

  async getById(id) {
    return await axios.get(ApiEndpoint.GET_DETAIL_STORY(id), {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken('token')}`,
      },
    });
  },

  async store({ description, photo }) {
    const data = { description, photo };

    return await axios.post(ApiEndpoint.ADD_STORY, data, {
      headers: {
        Authorization: `Bearer ${Utils.getUserToken('token')}`,
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  async storeAsguest({ description, photo }) {
    const data = { description, photo };

    return await axios.post(ApiEndpoint.ADD_STORY_GUEST, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default Transactions;
