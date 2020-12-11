const {CREATE_PHOTOS} = require('../constants/actionType')

export const createPhotos = (photos) => ({
  type: CREATE_PHOTOS,
  payload: photos,
})

export const getAllPhotos = () => async (dispatch, getState) => {
  const res = await fetch(
    'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0',
    {
      method: 'GET',
    },
  )
  dispatch(createPhotos(await res.json()))
}
