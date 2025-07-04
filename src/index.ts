/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	console.log('Desafio 2 - Começa')

	const nome1:string = 'Eliel Silva';
	const idade1:number = 33;
	const peso1:number = 88.50;
	const altura1:number = 1.70;
	const ehDev1:boolean = true;

	const nome2:string = 'Igor Medeiros';
	const idade2:number = 29;
	const peso2:number = 90;
	const altura2:number = 1.82;
	const ehDev2:boolean = true;

	const nome3:string = 'Jose Ferreira';
	const idade3:number = 47;
	const peso3:number = 86;
	const altura3:number = 1.75;
	const ehDev3:boolean = false;

	const nome4:string = 'Lucas Camilo';
	const idade4:number = 30;
	const peso4:number = 79.80;
	const altura4:number = 1.69;
	const ehDev4:boolean = true;

	console.log(nome1, idade1, peso1, altura1, ehDev1);
	console.log(nome2, idade2, peso2, altura2, ehDev2);
	console.log(nome3, idade3, peso3, altura3, ehDev3);
	console.log(nome4, idade4, peso4, altura4, ehDev4);
	
});
