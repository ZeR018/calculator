const initialState = {
	isSidebarOpen: true,
};

const sidebar = (state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_SIDEBAR_OPEN':
			const oldValue = { ...state };
			return {
				...state,
				isSidebarOpen: !oldValue.isSidebarOpen,
			};

		default:
			return state;
	}
};

export default sidebar