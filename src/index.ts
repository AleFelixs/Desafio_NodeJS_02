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

	// const nome1:string = 'Eliel Silva';
	// const idade1:number = 33;
	// const peso1:number = 88.50;
	// const altura1:number = 1.70;
	// const ehDev1:boolean = true;

	// const nome2:string = 'Igor Medeiros';
	// const idade2:number = 29;
	// const peso2:number = 90;
	// const altura2:number = 1.82;
	// const ehDev2:boolean = true;

	// const nome3:string = 'Jose Ferreira';
	// const idade3:number = 47;
	// const peso3:number = 86;
	// const altura3:number = 1.75;
	// const ehDev3:boolean = false;

	// const nome4:string = 'Lucas Camilo';
	// const idade4:number = 30;
	// const peso4:number = 79.80;
	// const altura4:number = 1.69;
	// const ehDev4:boolean = true;

	// console.log(`Nome: ${nome1}, idade: ${idade1}, peso: ${peso1}, Altura: ${altura1}, é um Dev? ${ehDev1}.`);
	// console.log(`Nome: ${nome2}, idade: ${idade2}, peso: ${peso2}, Altura: ${altura2}, é um Dev? ${ehDev2}.`);
	// console.log(`Nome: ${nome3}, idade: ${idade3}, peso: ${peso3}, Altura: ${altura3}, é um Dev? ${ehDev3}.`);
	// console.log(`Nome: ${nome4}, idade: ${idade4}, peso: ${peso4}, Altura: ${altura4}, é um Dev? ${ehDev4}.`);

	// const idadeSoma:number = idade1 + idade2 + idade4;

	// console.log(`A idade somada dos membros ubuntu é: ${idadeSoma}`);


	type Pessoa = {
	nome: string;
	idade: number;
	peso: number;
	altura: number;
	ehDev: boolean;
	};

	const pessoas: Pessoa[] = [
	{ nome: 'Eliel Silva', idade: 33, peso: 88.5, altura: 1.70, ehDev: true },
	{ nome: 'Igor Medeiros', idade: 29, peso: 90, altura: 1.82, ehDev: true },
	{ nome: 'Jose Ferreira', idade: 47, peso: 86, altura: 1.75, ehDev: false },
	{ nome: 'Lucas Camilo', idade: 30, peso: 79.8, altura: 1.69, ehDev: true },
	{ nome: 'Jonas Silva', idade: 20, peso: 70, altura: 1.71, ehDev: true}
	];

	pessoas.forEach(pessoa => { 
 	console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, peso: ${pessoa.peso}, Altura: ${pessoa.altura}, é um Dev? ${pessoa.ehDev}.`);
});

	const idadeTotalUbuntu = pessoas
	.filter(pessoa => pessoa.ehDev)
	.reduce((soma, pessoa) => soma + pessoa.idade, 0);
	console.log(`Soma das idades dos Ubuntus: ${idadeTotalUbuntu}.`);

	const nomesUbuntu = pessoas
	.filter(pessoa => pessoa.ehDev)
	.map(pessoa => pessoa.nome)
	.join(', ')
	console.log(`Nomes dos Ubuntus: ${nomesUbuntu}.`);

	const ubuntus = pessoas
	.filter(p => p.ehDev);
	const mediaIMCUbuntu = ubuntus
	.reduce((somaIMC, pessoa) => somaIMC + (pessoa.peso / (pessoa.altura * pessoa.altura)), 0) / ubuntus.length;
	console.log(`Média do IMC dos Ubuntus: ${mediaIMCUbuntu.toFixed(2)}.`);

	const totalUbuntus = ubuntus.length;
	console.log(`Quantidade de Ubuntus (devs): ${totalUbuntus}.`);

	const silvas = ubuntus
	.filter(pessoa => pessoa.nome.includes('Silva'))
	.map(pessoa => pessoa.nome)
	.join(', ')
	console.log(`Ubuntus com sobrenome Silva: ${silvas}.`);
});
