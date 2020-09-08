export const defaultOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    apiKey: `${process.env.SANTA_PICKER_API_KEY}`,
  },
};

export const request = async (endpoint, options = defaultOptions) => {
  const fetchOptions = {
    ...defaultOptions,
    ...options,
  };

  if (options.body) {
    fetchOptions.body = JSON.stringify(options.body);
  }

  try {
    const response = await fetch(
      `${process.env.REACT_APP_SANTA_API_URL}${endpoint}`,
      fetchOptions,
    );

    if (response.status < 200 || response.status > 299) {
      console.error(response);
      return Promise.reject(response);
    }

    const result = new Promise((resolve) => {
      if (response) {
        response
          .json()
          .then((json) => resolve(json))
          .catch(() => resolve());
      } else {
        resolve();
      }
    });

    return Promise.resolve(result);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
