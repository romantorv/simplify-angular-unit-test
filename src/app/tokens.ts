import { InjectionToken } from '@angular/core';

export type EnvironmentType = 'local' | 'staging' | 'production';
export const Env = new InjectionToken<EnvironmentType>('environment');
