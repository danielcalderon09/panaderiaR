import express from 'express';
import cors from 'cors';
import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;


app.use(cors());


app.use('/assets', express.static(path.join(__dirname, '../../public/assets')));


const storage = multer.memoryStorage();
const upload = multer({ storage });


app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { buffer, originalname } = req.file;
    const filePath = path.join(__dirname, '../../public/assets/uploads', originalname);

    
    await sharp(buffer)
      .resize(500, 500) 
      .toFile(filePath);

    res.json({ message: 'Imagen subida y procesada con éxito', filePath: `/assets/uploads/${originalname}` });
  } catch (error) {
    res.status(500).json({ message: 'Error al procesar la imagen', error });
  }
});


app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
