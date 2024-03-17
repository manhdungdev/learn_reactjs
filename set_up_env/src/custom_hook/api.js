const fetchAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          user: 'Dung HM',
          nation: 'USA',
          city: {
            name: 'Washington DC',
            street: 'Cambridge'
          }
        }
      });
    }, 2000);
  });
};

export default fetchAPI;
