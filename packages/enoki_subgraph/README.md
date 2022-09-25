### How to create Subgraphs with Studio and make requests using nodeJs, handle events, ...
### Source: https://youtu.be/g4-TQaDE64U?t=1040

1.) Create Folder and init npm 
2.) Install dependency: npm i -g @graphprotocol/graph-cli
3.) Run: graph init --contract-name CryptoPunks --product subgraph-studio --index events --from-contract 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB (it is on ETH Mainnet, choose those options)
4.) In subgraph.yaml delete events+handlers which are not being used + specify a startBlock
5.) Create a Schema (schema.graphql)
6.) Run "graph codegen"
7.) Specify what to happen on events in src/mapping.ts (or the file which was created within ./src)
8.) Authorize by running "graph auth", then copy the deploy key (which is shown within the previously created subgraph in studio)
9.) Deploy by running "graph deploy --studio NameOfSubgraphCreatedInStudio"
* Subgraphs may also be deployed within the Studio ("publish")

When querying data, extra parameters can be passed for filtering:
examples -->
#1 pairs(first: 100, skip: 300) (shows the first 100 beginning from index 300, basically like pagination)
#2 pairs(first: 10, order: volumeUSD, orderDirection: desc) (shows the first 10 pairs descending, ordered by USD volume)
#3 pairs(where: { token0: symbol: 'ETH | WETH'})
#4 pairs(where: { volumeUSD_gt: "1000}) --> check Auto-Completion to get different parameter-options


### How to make queries with NodeJS
### Source https://www.youtube.com/watch?v=l2rzT_Dp4T0

const axios = require('axios')
const main = async () => {
  try {
    const result = await axios.post(
      'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
      {
        query: `
        {
          pairs {
            id
            token0 { symbol}
            token1 {symbol}
          }
        }
      `
      }
      // 'https://gateway.thegraph.com/api/E5UFVRJN8V9BFVGS4K3226SR8V54IUVVJH/subgraphs/id/EN9rjKtzNitTEb5hgt8bmiyzzhwBpJrJaRihkg8Me8Rr'
    )

    console.log(result.data);
  } catch (error) {
    console.log("Error", error)
  }
}

main()
