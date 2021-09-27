const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});

