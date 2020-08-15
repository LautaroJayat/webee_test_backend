// LOADING ENVIROMENT VARIABLES
const loadEnvs = require("./configs/load-envs");
const result = loadEnvs();

// Exiting if no .env
if (!result) {
  console.error(
    "Could Not load enviroment variables, please check if .env exists or if npm scripts exports correct ENV_FILE variable"
  );
  process.exit(1);
}

// CONTINUE IF OK
const initDB = require("./configs/database");
const app = require("./app");

// SETTING MAIN FUNCTION
async function main() {
  const success = await initDB(process.env.DB);
  if (!success) {
    console.error("Could Not connect with DB, shouting down server");
    console.trace();
    process.exit(1);
  }

  const server = await app.listen(process.env.PORT, () => {
    console.log("Express server is running cool on port", process.env.PORT);
  });
}

// INIT MAIN FUNCTION
main();
