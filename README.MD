# THE GRAPH

## Obtain Access Token

1. Open https://thegraph.com/ and Signin via Github credentials
2. Then click on your profile and select Dashboard
3. In dashboard you can see all of your existing subgraphs and the access token which is required to deploy successfully subraph

## How it works

The Graph is a decentralized protocol for indexing and querying data from blockchains, starting with Ethereum. It makes it possible to query data that is difficult to query directly.

1. Create TheGraph project:

In CLI run:    
- yarn global add @graphprotocol/graph-cli
  
Then to init the project execute following:
- graph init \
  --from-contract <CONTRACT_ADDRESS> \
  [--network <ETHEREUM_NETWORK>] \
  [--abi <FILE>] \
  <GITHUB_USER>/<SUBGRAPH_NAME> [<DIRECTORY>] 

2. There are three main parts in the newly created project:

- subgraph.yaml - Config file where we provide data for our smartcontract so we can set the subgraph to listen only for events from our smartcontract - More info: [Manifiest](https://thegraph.com/docs/define-a-subgraph#the-subgraph-manifest)

- schema.graphql - Contains all the models/entites, usually models have same struct and types as the events from our smart contract - [Create entity](https://thegraph.com/docs/define-a-subgraph#the-graphql-schema)

- src/mapping.ts - File where we use to fill our models with data from the emitted events - [Map entity and save it](https://thegraph.com/docs/define-a-subgraph#writing-mappings)

3. Simple workflow after project is initialized

- First we go in the schema.graphql and we create our entity structured the same way as the event is emmited from the smartcontract, there is additional prop ID which is required for each entity.
- Then we need to compile the file so to be able to access the newly created entity to do that simply run `yarn codegen`
- Go in the mappings file, import newly created entity and use it in his own handler to fill the data - check provided examples in links above
- Finally to deploy subgraph we can run `yarn deploy` and there is where our Access Token is required. Command which stay under yarn deploy is `graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ AndonMitev/Auctions --access-token <ACCESS_TOKEN>` just replace access token with your own.
- Finally graph is deployed, some time is needed to be synced with all the block on the network, this is optional we can speed up the process by providing in our schema.graphql starting block, should be the block when the contract is deployed.