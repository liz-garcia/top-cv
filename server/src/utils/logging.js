/**
 * Combine all the logging options into one file.
 *
 * For now we log to the console, but if in the future we want to add a logging service
 * we only need to adjust this file.
 */

import dotenv from "dotenv";
dotenv.config();

// * Utility to check if the environment is production.
const isProduction = process.env.NODE_ENV === "production";

// * ANSI color codes for styling
const styles = {
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  reset: "\x1b[0m",
};

// logInfo should be used to log anything that can be used for debugging but is not a problem.
export const logInfo = (message) => {
  if (!isProduction) {
    const styledMessage = `${styles.bold}${styles.cyan}${message}${styles.reset}`;
    // eslint-disable-next-line no-console
    console.log(styledMessage);
  }
};

// logWarning should be used to log anything that signals a problem that is not app breaking.
export const logWarning = (message) => {
  if (!isProduction) {
    const styledMessage = `${styles.bold}${styles.yellow}${message}${styles.reset}`;
    // eslint-disable-next-line no-console
    console.warn(styledMessage);
  }
};

// logError should be used to log anything that is app-breaking.
export const logError = (errorMessage) => {
  if (!isProduction) {
    let styledMessage;
    if (errorMessage instanceof Error) {
      styledMessage = `${styles.bold}${styles.red}${errorMessage.message}\n${errorMessage.stack}${styles.reset}`;
    } else {
      styledMessage = `${styles.bold}${styles.red}ERROR: ${errorMessage}${styles.reset}`;
    }
    // eslint-disable-next-line no-console
    console.error(styledMessage);
  }
};
