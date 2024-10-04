import { BlockExpectationType } from './../../../types/block-expectation-type';

export interface BlockExpectationRequestPayloadV6 {
  type: BlockExpectationType
  expectation: number;
  nextBlockUuid: string;
}
