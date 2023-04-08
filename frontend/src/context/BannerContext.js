import { createContext, useReducer } from 'react';

export const BannerContext = createContext();

export const BannerReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BANNERS':
      return {
        banners: action.payload,
      };
    case 'CREATE_BANNER':
      return {
        banners: [action.payload, ...state.banners],
      };
    case 'DELETE_BANNER':
      return {
        banners: state.banner.filter(
          (banner) => banner._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const BannerContextProvider = ({ children }) => {
  const [state, bannerdispatch] = useReducer(BannerReducer, {
    banners: null,
  });

  return (
    <BannerContext.Provider value={{ ...state, bannerdispatch }}>
      {children}
    </BannerContext.Provider>
  );
};
