import {MD5} from 'crypto-js';

export default function gravatarImg(email) {
  if (!!email) {
    const hash = MD5(email.toLowerCase()).toString();
    return hash;
  }
}
