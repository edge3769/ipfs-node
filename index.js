import { create } from 'ipfs'
create({
    config: {
        Addresses: {
            Swarm: ["/ip4/127.0.0.1/tcp/10000/", "/ip4/127.0.0.1/tcp/10000/ws"]
        }
    }
});
