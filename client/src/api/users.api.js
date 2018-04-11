import {getHttp} from '../utils/http';
import {setChatUserName} from '../state';

export const getChatUserName = async function (chatId) {
  const user = await getHttp('users');
  setChatUserName({chatId, userName: user.name});
};