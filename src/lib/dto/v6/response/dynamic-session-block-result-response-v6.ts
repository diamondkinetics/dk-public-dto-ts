import { SwingResponseV6 } from './swing-response-v6';

export interface DynamicSessionBlockResultResponseV6 {
  blockUuid: string;
  swings: SwingResponseV6[];
}
