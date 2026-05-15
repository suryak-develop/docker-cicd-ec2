const express = require('express'); 
const app = express(); 
app.get('/', (req, res) =
  res.send('?? CI/CD Pipeline is live! Deployed via AWS Auto Scaling'); 
}); 
app.get('/health', (req, res) =
  res.status(200).send('OK'); 
}); 
app.listen(port, '0.0.0.0', () =
  console.log(`App running on port ${port}`); 
}); 
