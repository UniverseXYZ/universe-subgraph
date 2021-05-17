import { BigInt } from '@graphprotocol/graph-ts';
import {
  Contract,
  LogAuctionCanceled,
  LogAuctionCreated,
  LogAuctionExtended,
  LogAuctionRevenueWithdrawal,
  LogBidMatched,
  LogBidSubmitted,
  LogBidWithdrawal,
  LogERC721Deposit,
  LogERC721RewardsClaim,
  LogERC721Withdrawal,
  LogRoyaltiesWithdrawal,
  OwnershipTransferred
} from '../generated/Contract/Contract';
import { AuctionEntity, LogBidSubmittedEntity } from '../generated/schema';

export function handleLogAuctionCanceled(event: LogAuctionCanceled): void {}

export function handleLogAuctionCreated(event: LogAuctionCreated): void {
  const auction = new AuctionEntity(event.params.auctionId.toHex());

  auction.auctionId = event.params.auctionId;
  auction.auctionOwner = event.params.auctionOwner;
  auction.numberOfSlots = event.params.numberOfSlots;
  auction.startBlockNumber = event.params.startBlockNumber;
  auction.endBlockNumber = event.params.endBlockNumber;
  auction.resetTimer = event.params.resetTimer;
  auction.supportsWhitelist = event.params.supportsWhitelist;
  auction.time = event.params.time;

  auction.save();
}

export function handleLogAuctionExtended(event: LogAuctionExtended): void {}

export function handleLogAuctionRevenueWithdrawal(event: LogAuctionRevenueWithdrawal): void {}

export function handleLogBidMatched(event: LogBidMatched): void {}

export function handleLogBidSubmitted(event: LogBidSubmitted): void {
  const bid = new LogBidSubmittedEntity(event.transaction.hash.toHex());

  bid.sender = event.params.sender;
  bid.auctionId = event.params.auctionId;
  bid.currentBid = event.params.currentBid;
  bid.totalBid = event.params.totalBid;
  bid.time = event.params.time;

  bid.save();
}

export function handleLogBidWithdrawal(event: LogBidWithdrawal): void {}

export function handleLogERC721Deposit(event: LogERC721Deposit): void {}

export function handleLogERC721RewardsClaim(event: LogERC721RewardsClaim): void {}

export function handleLogERC721Withdrawal(event: LogERC721Withdrawal): void {}

export function handleLogRoyaltiesWithdrawal(event: LogRoyaltiesWithdrawal): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}
