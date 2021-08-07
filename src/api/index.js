import axios from "axios";

axios.defaults.url = "http://localhost:3000";

const mock = true;

const mockPosts = [
  {
    id: 0,
    title: "Why HTML Tables are the only css you will ever need",
    subtitle: "A revolution is coming to Web, and its tables!",
    category: "Satire",
    timestamp: +new Date(),
    imageURL:
      "https://media.bonaldo.com/wp-content/uploads/2020/05/28165048/bonaldo-tavolo-bigtable-stilllife-1.jpg",
    body: ` 
This is the story of how I discovered that any css design or structure can be created using only html tables.

This is the story of how I discovered that any css design or structure can be created using only html tables.
This is the story of how I discovered that any css design or structure can be created using only html tables.

This is the story of how I discovered that any css design or structure can be created using only html tables.
This is the story of how I discovered that any css design or structure can be created using only html tables.


This is the story of how I discovered that any css design or structure can be created using only html tables.
This is the story of how I discovered that any css design or structure can be created using only html tables.
This is the story of how I discovered that any css design or structure can be created using only html tables.



All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 
  `,
  },
  {
    id: 1,
    title: "How I (safely) lost over 10kg  in just 2 months",
    subtitle: "This cat will make you smile for sure",
    category: "Love Life",
    timestamp: +new Date(),
    imageURL:
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    body: ` 
This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 
        `,
  },
  {
    id: 2,
    title: "Why I Deleted All My Social Media Temporarily",
    subtitle: "This cat will make you smile for sure",
    category: "Love Life",
    timestamp: +new Date(),
    imageURL:
      "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
    body: ` 
This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.


All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.



All of this and more he wondered. And dreamed about it. 


This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 

This is my story and its about time that I start telling it dont you think. Once upon a time
there was a boy who was very lonely and he did not know what to do with his life.

All this boy ever wanted was to live. He would look outside the window and wonder what life outside was like for all the other children. He watched them.
But this boy could not help but wonder what it would feel like to feel the sunlight, feel the summer air, breathe in the smell of dirt and nature.

All of this and more he wondered. And dreamed about it. 
        `,
  },
];

export const getBlogPost = async (id) => {
  try {
    if (mock) {
      return { code: 200, data: mockPosts[id] };
    }
    let response = await axios.get(`posts/${id}`);
    console.log(response);
    return response;
  } catch (err) {
    return { code: 500 };
  }
};

export const getPosts = async () => {
  try {
    if (mock) {
      return { code: 200, data: mockPosts };
    }
    let response = await axios.get(`posts`);
    console.log(response);
    return response;
  } catch (err) {
    return { code: 500 };
  }
};
