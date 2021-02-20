import axios from 'axios';
import { nanoid } from 'nanoid';
import md5 from 'md5';

const { REACT_APP_PUBLIC_KEY: PUBLIC_KEY, REACT_APP_PRIVATE_KEY: PRIVATE_KEY } = process.env;
const TS = nanoid(10);

const HASH = md5(TS + PRIVATE_KEY + PUBLIC_KEY);

export const QUERY = `ts=${TS}&apikey=${PUBLIC_KEY}&hash=${HASH}`;

export default axios.create({
  baseURL: 'https://gateway.marvel.com:443/v1/public',
});
