export const allHotels = (hotels) => {
  return {
    type: 'STORING_ALL_HOTELS',
    hotels
  }
}

export const selectHotel = (hotel) => {
  return {
    type: 'SELECTED_HOTEL',
    hotel
  }
}

export const selectRoom = (room) => {
  return {
    type: 'SELECTED_ROOM',
    room
  }
}
