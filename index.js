import inquirer from 'inquirer';
import generateName from 'sillyname';
import qr from 'qr-image';
import fs from 'fs';
import {randomSuperhero} from 'superheroes';

inquirer
    .prompt([
        {
        message: "What is your name?",
        name: "username"
        }
    ])
    .then((answers) => {
        const username = answers.username;
        const VillainName = generateName();
        const SuperheroName = randomSuperhero();

        console.log(`\nHello ${username}`);
        console.log(`Your villain name will be ${VillainName}`);
        console.log(`And your superhero name will be ${SuperheroName}\n`);
        
        qr.image(username, { type: 'png' }).pipe(fs.createWriteStream('name.png'));
        qr.image(VillainName, { type: 'png' }).pipe(fs.createWriteStream('sillyname.png'));
        qr.image(SuperheroName, { type: 'png' }).pipe(fs.createWriteStream('superheroname.png'));

        const logData = `User Name: ${username}\nVillain Name: ${VillainName}\nSuperhero Name: ${SuperheroName}\n\n`;
        fs.appendFileSync('myhero.txt', logData);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error("An error occurred:", error);
    }
  });
