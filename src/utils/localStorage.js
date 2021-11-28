function sendLoginToLocalStorage(userProfileData) {
    const stringfiedUserData = JSON.stringify(userProfileData);
    localStorage.setItem('TrackItLogin', stringfiedUserData);
}

function IsUserLoggedAndSendToHomepage(setUserProfileData, navigate) {
    if (localStorage.getItem('TrackItLogin')) {
        setUserProfileData(JSON.parse(localStorage.getItem('TrackItLogin')));
        navigate('/hoje');
    }
}

export {
    sendLoginToLocalStorage,
    IsUserLoggedAndSendToHomepage,
};
