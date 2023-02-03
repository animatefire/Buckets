// A Cascading Buckets-Style Financial Planner / Budgeting Software
// That helps you predict how much discretionary spending you have

// Data
// Expenses are like little buckets that can be filled up
// Each expense has a priority
// Discretionary spending is always last
// So a linked list of objects, that has:
//  ID
//  Next Bucket's ID
//  Last Bucket's ID
//  Overflow
//  Limit
//  Balance
// Boolean: Full?
// Methods: move, setOverflow, setLimit, overflowCheck, spillOver
// And each bucket has a method that reads the previous bucket's balance, and tell if it needs to "give up" some balance?
// You can set an overflow state on them, that tells them when to 

const host = 'localhost';
const http = require("http");
const port = 8000;


const requestListener = function(req, res) {
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

server(requestListener);

class Bucket {
  id: string;
  constructor(id: string) {
    this.id = id
  }
  DisplayID() {
    console.log(this.id)
  }
}

const rent = new Bucket("rent");
console.log(rent.DisplayID())