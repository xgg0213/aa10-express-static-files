const express = require('express');
const app = express();

// Your code here 
// // part 1:
// app.use('/stylesheets',express.static('assets/css'));

// // part 2:
// app.use('/', express.static('assets'));

// part 3:
app.use('/', express.static('assets/scripts'));

// bonus
app.use('/stickers', express.static('assets/images'))

const port = 8000;
app.listen(port, () => console.log('Server is listening on port', port));