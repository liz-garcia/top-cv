/**
 * Combine all the logging options into one file.
 *
 * For now we log to the console, but if in the future we want to add a logging service
 * we only need to adjust this file.
 */

// * Utility to check with Vite if the environment is production.
const isProduction = import.meta.env.VITE_NODE_ENV === "production";

// * ANSI color codes for styling
const styles = {
  bold: "\x1b[1m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  reset: "\x1b[0m",
};

// * logInfo should be used to log anything that can be used for debugging but is not a problem.
export const logInfo = (...args) => {
  if (!isProduction) {
    const styledMessage = args
      .map((arg) => {
        // Check if the argument is a string and contains new lines
        if (typeof arg === "string") {
          // Split by new lines and apply styles to each line
          return arg
            .split("\n")
            .map((line) => `${styles.bold}${styles.cyan}${line}${styles.reset}`)
            .join("\n");
        } else {
          // For non-string arguments, just apply the default style
          return `${styles.bold}${arg}${styles.reset}`;
        }
      })
      .join(" ");

    // eslint-disable-next-line no-console
    console.log(styledMessage);
  }
};

//  * logWarning should be used to log anything that signals a problem that is not app breaking.
export const logWarning = (...args) => {
  if (!isProduction) {
    const styledMessage = args
      .map((arg) => {
        // Check if the argument is a string and contains new lines
        if (typeof arg === "string") {
          // Split by new lines and apply styles to each line
          return arg
            .split("\n")
            .map(
              (line) => `${styles.bold}${styles.yellow}${line}${styles.reset}`
            )
            .join("\n");
        } else {
          // For non-string arguments, just apply the default style
          return `${styles.bold}${arg}${styles.reset}`;
        }
      })
      .join(" ");

    // eslint-disable-next-line no-console
    console.log(styledMessage);
  }
};

//  * logError should be used to log anything that is app-breaking.
export const logError = (errorMessage) => {
  if (!isProduction) {
    let styledMessage;
    if (errorMessage instanceof Error) {
      styledMessage = `\n${styles.bold}${styles.red}${errorMessage.message}\n${errorMessage.stack}${styles.reset}\n`;
    } else {
      styledMessage = `\n${styles.bold}${styles.red}ERROR: ${errorMessage}${styles.reset}\n`;
    }
    // eslint-disable-next-line no-console
    console.error(styledMessage);
  }
};
