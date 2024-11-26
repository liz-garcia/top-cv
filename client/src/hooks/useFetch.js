// * useFetch hook designed by HackYourFuture
// * HYF final-project-template: https://github.com/HackYourFuture/final-project-template
// Slight modifications done to make it work with Vite:
// -> Modified import statement for .env variables
// -> Modified the use of AbortController for scenarios where Double Rendering of Effects make take place (for example, due to React.StrictMode on development mode.)
// -> Added extra validation for arguments in our custom hook

/**
 * Our useFetch hook should be used for all communication with the server.
 *
 * route - This is the route you want to access on the server. It should NOT include the /api part, so should be /user or /user/{id}
 * onReceived - a function that will be called with the response of the server. Will only be called if everything went well!
 *
 * Our hook will give you an object with the properties:
 *
 * -----> isLoading - true if the fetch is still in progress
 * -----> error - will contain an Error object if something went wrong
 * -----> performFetch - this function will trigger the fetching. It is up to the user of the hook to determine when to do this!
 * -----> cancelFetch - this function will cancel the fetch, call it when your component is unmounted
 */

import { useState, useEffect, useRef } from "react";

// * Use Fetch Hook
const useFetch = (route, onReceived) => {
  // * Initial state for `error` and `isLoading`
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Validating arguments
  if (typeof route !== "string") {
    throw new Error("useFetch: route must be a string");
  }

  if (typeof onReceived !== "function") {
    throw new Error("useFetch: onReceived must be a function");
  }

  if (route.includes("api/")) {
    // We add this check here to provide a better error message if you accidentally add the api part
    // As an error that happens later because of this can be very confusing!
    throw Error(
      "When using the useFetch hook, the route should not include the /api/ part"
    );
  }

  // We will store the AbortController in a ref so that it persists across renders
  const controllerRef = useRef(null);

  // * Perform Fetch
  const performFetch = (options) => {
    setError(null);
    setIsLoading(true);

    // Create a new AbortController for each fetch
    // We use the AbortController which is supported by all modern browsers to handle cancellations.
    // For more info: https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    const controller = new AbortController();
    controllerRef.current = controller;
    const signal = controller.signal;

    const baseOptions = {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    // Import VITE_BASE_SERVER_URL
    const baseServerURL = import.meta.env.VITE_BASE_SERVER_URL;

    // We add the /api subsection here to make it a single point of change if our configuration changes
    const url = `${baseServerURL}/api${route}`;

    // ***** Fetch data *****
    const fetchData = async () => {
      try {
        const res = await fetch(url, { ...baseOptions, ...options, signal });

        if (!res.ok) {
          throw new Error(
            `Fetch for ${url} returned an invalid status (${
              res.status
            }). Received: ${JSON.stringify(res)}`
          );
        }

        const jsonResult = await res.json();

        if (jsonResult.success === true) {
          onReceived(jsonResult);
        } else {
          throw new Error(
            jsonResult.msg ||
              `The result from our API did not have an error message. Received: ${JSON.stringify(jsonResult)}`
          );
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  };

  // * Cancel fetch
  const cancelFetch = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };

  // Clean up on unmount
  useEffect(() => {
    return cancelFetch;
  }, []);

  return { isLoading, error, performFetch, cancelFetch };
};

export default useFetch;
