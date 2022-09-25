
import 'dotenv/config'
import { ethers } from 'ethers'
import { Framework } from '@superfluid-finance/sdk-core'

const provider = new ethers.providers.InfuraProvider(
    "kovan",
    process.env.INFURA_API_KEY
)

// Connect to Mumbai testnet.
const superFluid = await Framework.create({
    networkName: "mumbai",
    provider: provider,
});

const signer = superFluid.createSigner({ signer: wallet });

const DAIx = "0xe3cb950cb164a31c66e32c320a800d477019dcff"

const flowRate = "29400000000000"

try {
    const createFlowOperation = superfluid.cfaV1.createFlow({
        flowRate: flowRate,
        receiver: proess.env.RECEIVER_ADDRESS,
        superToken: DAIx
    })

    const result = await createFlowOperation.exec(signer);
} catch (error) {
    console.log("error": error);
}