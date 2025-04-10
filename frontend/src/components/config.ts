
const BASE_URL =
  process.env.NODE_ENV=== 'development'
    ? 'http://localhost:5000'
    : 'https://ipl-dashboard-backend.vercel.app';
export default BASE_URL;