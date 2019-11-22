export const BASE_URL = process.browser ? '' : process.env.APP_URL; // ssr needs to know app url where to send ajax requests
export const ROOT_API = `${BASE_URL}/api`;
