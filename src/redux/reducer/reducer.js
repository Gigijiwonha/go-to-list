const initialState = {
  listItem: [],
  searchByKeywords: "",
};

function reducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "CREATE_LIST_DATA":
      return {
        ...state,
        listItem: [
          ...state.listItem,
          {
            place: payload.place,
            placeName: payload.placeName,
            suburb: payload.suburb,
            detailAddress: payload.detailAddress,
            keywords: payload.keywords,
            comments: payload.comments,
          },
        ],
      };

    case "SEARCH_BY_KEYWORDS":
      return { ...state, searchByKeywords: payload.searchByKeywords };
    default:
      return { ...state };
  }
}

export default reducer;
