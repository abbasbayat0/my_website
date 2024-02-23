const initialState = {
  showMenu: false,
  menuTitle: "",

  // show color box
  showColor: false,

  // custom color
  color: "jade-600",

  // custom text color
  text: "text-jade-600",

  // custom border color
  border: "border-jade-600",

  // which component shows
  componentShow: "home",

  // to Enter not run at first enter :|
  first: false,

  // to hover on skills
  hover1: false,
  hover2: false,
  hover3: false,
  hover4: false,
  hover5: false,
  hover6: false,
  hover7: false,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "menu":
      return { ...state, showMenu: !state.showMenu };

    case "showColor":
      return { ...state, showColor: !state.showColor };

    case "color":
      return {
        ...state,
        color: action.data,
        text: action.text,
        border: action.border,
      };

    case "title":
      return { ...state, showMenu: state.showMenu, menuTitle: action.data };

    case "component":
      return {
        ...state,
        menuTitle: state.menuTitle,
        componentShow: action.data,
      };

    case "first":
      return { ...state, first: true };

    case "hover1":
      return { ...state, hover1: !state.hover1 };

    case "hover2":
      return { ...state, hover2: !state.hover2 };

    case "hover3":
      return { ...state, hover3: !state.hover3 };

    case "hover4":
      return { ...state, hover4: !state.hover4 };

    case "hover5":
      return { ...state, hover5: !state.hover5 };

    case "hover6":
      return { ...state, hover6: !state.hover6 };

    case "hover7":
      return { ...state, hover7: !state.hover7 };

    default:
      return state;
  }
};

export { Reducer, initialState };
