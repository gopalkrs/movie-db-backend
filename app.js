const express = require('express');
const path = require('path');
const api = require("./server/api");
const app = express();
const cors = require('cors');

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api",api);
// app.use(express.static(path.join(__dirname, 'build')));

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
    console.log(`Server running at ${port}`); 
});