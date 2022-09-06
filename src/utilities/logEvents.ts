// Imports
import {format} from 'date-fns';
import {v4 as uuid} from 'uuid';
import fs from 'fs';
import path from 'path';
import fsPromises from 'fs/promises';


// Module Variables
const PATH_LOGS = "./logs/";

export const logEvents = async (message: string) => {
  const dateTime = `${format(new Date(), "ddMMyyyy\tHH:mm:ss")}`;
  const theLog = `${dateTime}\t${uuid()}\t${message}\n`;
  console.log(theLog);

  try {
    if(!fs.existsSync(path.join(__basedir, PATH_LOGS))) {
      await fsPromises.mkdir(path.join(__basedir, PATH_LOGS));
    };

    await fsPromises.appendFile(path.join(__basedir, PATH_LOGS, "eventLog.txt"), theLog);
  } catch (error) {
    console.error(error);
  };
};