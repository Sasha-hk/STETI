const defaultNewsState = {
    news: [
        {
            title: '',
            body: ''
        }
    ],
    isLoading: false,
    error: false,
}

const newsReducer = (state = defaultNewsState, action) => {
    switch (action.type) {
        case 'UPLOAD':
            console.log('1 ===================')
            return {...state, isLoading: true}
            
        default:
            console.log('2 ===================')
            return state
    }
}

export default newsReducer