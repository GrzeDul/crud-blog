const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title |',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date(2022, 1, 2),
      author: 'John Doe',
      category: 'News',
    },
    {
      id: '2',
      title: 'Article two ||',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date(2022, 1, 2),
      author: 'John Doe',
      category: 'Movies',
    },
    {
      id: '3',
      title: 'Article three |||',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date(2022, 1, 2),
      author: 'John Doe',
      category: 'Sport',
    },
  ],
  categories: ['Sport', 'Movies', 'News'],
};

export default initialState;
