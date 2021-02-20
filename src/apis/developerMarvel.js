import axios from 'axios';
import { nanoid } from 'nanoid';
import md5 from 'md5';

const TS = nanoid(10);
const PRIVATE_KEY = '';
const PUBLIC_KEY = '';
const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);

export const QUERY = `ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

export default axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
});
