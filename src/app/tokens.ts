import { InjectionToken } from '@angular/core';

type EnvironmentType = 'local' | 'staging' | 'production';
export const Env = new InjectionToken<EnvironmentType>('environment');
