const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = 'SiBl3uovCC4H9TFx5ybt';

export const createLike = async (id) => {
  const awaitLikes = await fetch(`${url}${urlID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitLikes;
};

export const getLikes = async () => {
  const response = await fetch(`${url}${urlID}/likes`);
  const data = await response.json();
  return data;
};
