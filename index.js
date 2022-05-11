const express = require('express');
const cors = require('cors');

const api = express();

api.use(cors());
api.use(express.json());

api.get('/', (request, response) => {
  return response.status(200).json({
    message: 'Success',
  });
});

api.listen(3333, () => console.log('ON FIRE API RUNNING ON PORT 3333'));
