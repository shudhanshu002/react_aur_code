import express from 'express';

const app = express();

import cors from 'cors';

app.use(cors());


app.get('/',(req,res) => {
    res.send('Server is ready');
});

app.get('/api/jokes', (req, res) => {
    try {
      const jokes = [
        {
          id: 1,
          title: 'A joke',
          content: 'This is a joke',
        },
        {
          id: 2,
          title: 'Another joke',
          content: 'This is another joke',
        },
      ];
      console.log('Jokes retrieved:', jokes); // Debug log
      res.send(jokes);
    } catch (error) {
      console.error('Error in /api/jokes:', error); // Log errors
      res.status(500).send({ message: 'Internal Server Error' });
    }
  });
 