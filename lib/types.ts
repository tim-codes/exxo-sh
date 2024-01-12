import { FC, ReactNode } from 'react';

export type FCC<P = NonNullable<unknown>> = FC<P & { children?: ReactNode }>;
