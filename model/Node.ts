import { NetworkType } from "symbol-sdk/dist/src/model/network/NetworkType";

/**
 * role of node.
 *  The values are bitwise added together, Examples: 1 = Just Peer. 2 = Just Api. 3 = Peer and Api node. 7 = Peer, Api and Voting node. 65 = IPv4 and Peer node.
 */
export enum NodeRole {
  "PeerNode" = 1,
  "ApiNode" = 2,
  "PeerAndApiNode" = 3,
  "VotingNode" = 4,
  "PeerAndVotingNode" = 5,
  "ApiAndVotingNode" = 6,
  "PeerAndApiAndVotingNode" = 7,
  "IPv4CompatibleNode" = 64,
  "IPv4CompatibleAndPeerNode" = 65,
  "IPv4CompatibleAndApiNode" = 66,
  "IPv4CompatibleAndPeerAndApiNode" = 67,
  "IPv4CompatibleAndPeerAndApiAndVotingNode" = 71,
  "IPv6CompatibleNode" = 128,
  "IPv6CompatibleAndPeerNode" = 129,
  "IPv6CompatibleAndApiNode" = 130,
  "IPv6CompatibleAndPeerAndApiNode" = 131,
  "IPv6CompatibleAndPeerAndApiAndVotingNode" = 135,
}

export interface NodeInfo {
  url: string;
  type: NetworkType;
}
