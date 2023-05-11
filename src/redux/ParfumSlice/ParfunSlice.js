import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  ParfumsList: [
    {
      id: Math.random(),
      image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/11811330392094/Jimmy-Choo-Eau-de-Parfum-Spray-3386460048125-Flash.jpg",
      name: "JIMMY CHOO-Flach",
      description: "Eau de Parfum Spray - 60ML",
      price: " £29.99   "
    },
    {
      id: Math.random(),
      image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/10936364400670/Valentino-Eau-de-Toilette-for-him-3614272761452-Born-In-Roma-Uomo.jpg",
      name: "VALENTINO-Born In Roma Uomo",
      description: "Eau de Toilette for him-50Ml",
      price: " £59.00   "

    },
    {
      id: Math.random(),
      image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/10570384146462/Montblanc-Eau-de-Parfum-Spray-3386460101035-Explorer.jpg",
      name: "MONTBLANC-Explorer",
      description: "Eau de Parfum Spray-100ML",
      price: " £69.00 "
    },
    {
      id: Math.random(),
      image: "https://www.theperfumeshop.com/medias/sys_master/front-zoom/front-zoom/11795806486558/Britney-Spears-Eau-de-Parfum-Spray-719346065405-Fantasy.jpg",
      name: "BRITNEY SPEARS-Fantasy",
      description: "Eau de Parfum for her-100ML",
      price: "  £20.99 "
    }],

};




export const ParfumSlice = createSlice({
  name: 'parfum',
  initialState,
  reducers: {

    addParfum: (state, action) => {
      state.ParfumsList.push(action.payload);

    },
    deleteParfum: (state, action) => {
      state.ParfumsList = state.ParfumsList.filter((el) => el.id !== action.payload.id);

    },
    editParfum: (state, action) => {
      let i = state.ParfumsList.findIndex((el) => el.id === action.payload.id);
      state.ParfumsList[i] = {
        ...state.ParfumsList[i], image: action.payload.edited.image, name: action.payload.edited.name,
        description: action.payload.edited.description,
        price: action.payload.edited.price,
      }
    },
  }
});

// Action creators are generated for each case reducer function
export const { addParfum, editParfum } = ParfumSlice.actions

export default ParfumSlice.reducer