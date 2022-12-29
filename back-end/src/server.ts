import express from 'express';

const app = express();

app.use(express.json())

app.listen(3003, () => {
  console.log('listening on http://localhost:3333');
});
