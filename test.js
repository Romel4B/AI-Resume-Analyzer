import inquirer from 'inquirer';

console.log("✅ Script started...");

inquirer
  .prompt([
    {
      type: "input",
      name: "testName",
      message: "Enter something:",
    }
  ])
  .then((answers) => {
    console.log("✅ Received:", answers);
  })
  .catch((error) => {
    console.error("❌ Error:", error);
  });


