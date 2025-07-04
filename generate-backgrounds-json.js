import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dir = path.join(__dirname, 'public', 'backgrounds')
const output = path.join(__dirname, 'public', 'backgrounds-list.json')

const supportedExt = ['.jpg', '.jpeg', '.png', '.webp', '.avif']

const files = fs
  .readdirSync(dir)
  .filter(file => supportedExt.includes(path.extname(file).toLowerCase()))
  .map(file => `/backgrounds/${file}`)

fs.writeFileSync(output, JSON.stringify(files, null, 2))
console.log(`Generated backgrounds.json with ${files.length} entries`)
