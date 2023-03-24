import React, { useState, useEffect } from 'react';

const Joke = () => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);

  console.log('user', user);

  const callJoke = async () => {
    setLoading(true);
    const res = await fetch(
      'https://official-joke-api.appspot.com/random_joke'
    );
    const joke = await res.json();
    console.log('joke', joke);
    setUser(joke);
    setLoading(false);
  };

  useEffect(() => {
    //callJoke();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Joke</h2>
      <div>
        <button onClick={callJoke}>Joke</button>
      </div>

      <h2>{user?.id}</h2>
    </div>
  );
};

export default Joke;
