/**
 * Exercise 05 – Recursive File Search
 * 
 * Simulates searching for a file in nested directories recursively.
 */

const fileSystem = {
    name: "root",
    children: [
        { name: "file1.txt", children: [] },
        { name: "folder1", children: [
            { name: "file2.txt", children: [] },
            { name: "subfolder", children: [
                { name: "target.txt", children: [] }
            ]}
        ]}
    ]
};

function searchFile(node, target, path = "") {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    if (node.name === target) return currentPath;
    if (node.children) {
        for (let child of node.children) {
            const result = searchFile(child, target, currentPath);
            if (result) return result;
        }
    }
    return null;
}

console.log("=== Recursive File Search ===");
const fileToFind = "target.txt";
const foundPath = searchFile(fileSystem, fileToFind);
console.log(foundPath ? `Found: ${foundPath}` : "File not found ❌");