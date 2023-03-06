import { create } from 'ipfs'
create({
    config: {
        Addresses: {
            Swarm: ["/ip4/0.0.0.0/tcp/10000/", "/ip4/0.0.0.0/tcp/10000/ws"]
        }
    }
});


