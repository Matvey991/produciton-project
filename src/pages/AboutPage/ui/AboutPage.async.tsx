import { lazy } from 'react';

export const AboutPageAsync = lazy(
    () => new Promise((resolve) => {
        // @ts-ignorex
        setTimeout(() => resolve(import('./AboutPage')), 1500);
    }),
);
