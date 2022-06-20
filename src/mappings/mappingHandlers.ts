import { SubstrateBlock } from '@subql/types'
import { Block } from '../types';

export async function handleBlock(block: SubstrateBlock): Promise<void> {
  const blockData = new Block(block.block.header.number.toString());

  blockData.timestamp = new Date().getTime().toString();
}

export async function handleEvent(block: SubstrateBlock): Promise<void> {}
export async function handleCall(block: SubstrateBlock): Promise<void> {}