# Sensors Back-End for Webee Challenge
A little backend with CRUD operations for a system that handles sensors, sensor-events, and users operations.
#### [Lastest tests on node 10](https://github.com/LautaroJayat/webee_test_backend/runs/995400930?check_suite_focus=true)
#### [Lastest tests on node 12](https://github.com/LautaroJayat/webee_test_backend/runs/995400944?check_suite_focus=true)
## Instructions:
* Download this repo and run `yarn` in order to install all dependencies.
* Set up your enviroment files with the following configurations: `DB=` `PORT=` `SECRET=` `HASHING_SECRET=`
  
  By default the repo provides some files named `dev.env` `fake-prod.env` `test.env`, you can use the default configurations if you dont want to configure yor own DB.
  As an example, the followings are the configurations of `dev.env` 
  ```
  DB=mongodb://localhost/webee_test_lautaro_jayat_testing_env
  PORT=9001
  SECRET=THIS_IS_VERY_SECURE_ASD321ASD6521351124
  HASHING_SECRET=THIS_IS_VERY_SECURE_ALSO_FOR_THE_PASSWORDS_ASD321ASD6521351124
  ```
 
 * Select the enviroment you want to use.
 * If you want to run it as a development server you should use the following command **`yarn start:dev`**
  This will run the following command **`export ENV_FILE=dev.env && nodemon index.js`** so you will be using our provided `dev.env` file and `nodemon`
 * if you want to run it directly with node (maybe because you have a systemd daemon to monitor it) you can use **`yarn start`**
  This will run the followin command **`export ENV_FILE=fake-prod.env && node index.js >> app.log`**, so you will be using our provided `fake-prod.env`
 #### Remember to choose a new name for the `DB=` env-vairable. Unless you know what DB you have, I strongly recommend to use our .env files. It would be strange that you have an DB with that name.
 
 ## Tests:
  If you go to the **`tests`** folder you will see some folders with a few `*.test.js` files. 
  All the CRUD have green-tests (suites which tests only the straight froward uses cases), but there are other tests which tests edgy use cases.
  
  * if you want to test them in your local enviroment, just run **`yarn test`**. This will run `export ENV_FILE=test.env && mocha tests/**/*.test.js` wich will
  runn all tests in the tests folder, using the enviroment variables provided by `test.env`.
