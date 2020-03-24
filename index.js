const express = require('express');

const server = express();
      server.use(express.json());
      // server.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n ** SERVER LISTENING ON PORT: ${PORT} **`);
});
