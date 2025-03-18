
'use server';

import { cookies } from 'next/headers';

export const getAllCookiesString = async () => {
  const getAllCookies = (await cookies()).getAll();

  if (getAllCookies.length === 0) return '';

  return getAllCookies.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
};

export const getCookieString = async (name: string, options?: { getOnlyValue: boolean }) => {
  const cookie = (await cookies()).get(name);

  if (!cookie) {
    return '';
  }

  return options?.getOnlyValue ? cookie?.value : `${cookie?.name}=${cookie?.value};`;
};

