const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/students") {
        res.end("GET: Display students");
    }

    else if (req.method === "POST" && req.url === "/students") {
        res.end("POST: Add a student");
    }

    else if (req.method === "PUT" && req.url === "/students") {
        res.end("PUT: Update student");
    }

    else if (req.method === "DELETE" && req.url === "/students") {
        res.end("DELETE: Delete student");
    }

    else {
        res.statusCode = 404;
        res.end("Route not found");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});