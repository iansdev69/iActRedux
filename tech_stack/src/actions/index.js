export const selectLibrary = (topicId) => {
    return {
        type: 'select_library',
        payload: topicId
    }
};