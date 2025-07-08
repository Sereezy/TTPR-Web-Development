import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.render('index.ejs', {
        dayType: 'a weekday',
        advice: "it's time to work hard"
    });

    // Test code
    app.listen(port, () => {
        console.log(`Server running on port ${port}.`);
    });
});