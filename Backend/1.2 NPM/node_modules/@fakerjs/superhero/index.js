import path from 'node:path';
import fs from 'node:fs';
import {loadJsonFileSync} from 'load-json-file';

export default function superhero() {
    const filePath = `./superheroes.json`;
    let superheroes = [];
    superheroes = fs.existsSync(path.resolve(filePath)) ? loadJsonFileSync(filePath) : loadJsonFileSync(path.resolve('node_modules/@fakerjs/superhero/', filePath));
    return superheroes[Math.floor(Math.random() * superheroes.length)];
}
