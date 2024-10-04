import { BlockExpectationType } from './../../../types/block-expectation-type';

export interface BlockExpectationResponseV6 {
  type: BlockExpectationType;
  expectation: number;
  nextBlockUuid: string;
}