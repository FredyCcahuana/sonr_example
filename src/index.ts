import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import usuarioRoutes from './routes/usuario.routes'
import vehiculoRoutes from './routes/vehiculo.routes'
import observacionesRoutes from './routes/observaciones.routes'
import estado_observaciones from './routes/estado_observaciones.routes'
const app = express();
createConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use(usuarioRoutes);
app.use(vehiculoRoutes);
app.use(observacionesRoutes);
app.use(estado_observaciones);

app.listen(3000);
console.log('Server on port', 3000);