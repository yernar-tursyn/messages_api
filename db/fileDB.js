const fs = require('fs');
const path = require('path');


module.exports = {
    
    addProduct(prod) {
        const now = new Date();
        const timestamp = now.toISOString().replace(/:/g,"-");
        prod.date = timestamp;
        const message = `messages/${timestamp}.txt`;
        fs.writeFileSync(message, JSON.stringify(prod));
    },

    getProducts() {
        const dirPath = 'messages';
        const files = fs.readdirSync(dirPath);

        files.sort((a, b) => {
            const statsA = fs.statSync(path.join(dirPath, a));
            const statsB = fs.statSync(path.join(dirPath, b));
            return statsB.mtimeMs - statsA.mtimeMs;
        });

        const latestFiles = files.slice(0, Math.min(files.length, 5));

        const messages = [];
        latestFiles.forEach(file => {
            const filePath = path.join(dirPath, file);
            const content = fs.readFileSync(filePath);
            messages.push(JSON.parse(content));
        });

        return messages;
    }
};
