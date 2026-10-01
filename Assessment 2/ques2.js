const http = require("http");
const fs = require("fs");

const port = 3000;

if (!fs.existsSync("files")) {
    fs.mkdirSync("files");
}

const server = http.createServer((req, res) => {

    let fileName = req.url.substring(1);
    let filePath = "files/" + fileName;

    if (req.method === "POST") {
        let data = "";

        req.on("data", chunk => {
            data += chunk;
        });

        req.on("end", () => {
            fs.writeFile(filePath, data, () => {
                res.end("File created");
            });
        });
    }

    else if (req.method === "GET") {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.end("File not found");
            } else {
                res.end(data);
            }
        });
    }

    else if (req.method === "PUT") {
        let data = "";

        req.on("data", chunk => {
            data += chunk;
        });

        req.on("end", () => {
            fs.writeFile(filePath, data, () => {
                res.end("File updated");
            });
        });
    }

    else if (req.method === "DELETE") {
        fs.unlink(filePath, () => {
            res.end("File deleted");
        });
    }

    else {
        res.end("Invalid request");
    }
});

server.listen(port, () => {
    console.log("Server running on port 3000");
});