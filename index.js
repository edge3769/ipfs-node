import http from "http";
import { create } from "ipfs";

const ipfs_port = 3737;
const health_port = 10000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200);
    res.end();
  }
});

server.listen(health_port, () => {
  console.log(`Server is running on port ${health_port}`);
});

create({
  config: {
    Addresses: {
      Swarm: [
        `/ip4/0.0.0.0/tcp/${ipfs_port}/`,
        `/ip4/0.0.0.0/tcp/${ipfs_port}/ws`,
      ],
    },
  },
});
