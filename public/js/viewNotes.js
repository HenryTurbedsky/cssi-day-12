
window.onload = event => {
    
    firebase.auth().onAuthStateChanged(user => {
        if(user)
        {
            const googleUserId = user.uid
        } else {
            window.location = "index.html"
        }


    })


}


const getNotes = (userId) => {
    const noteRef = firebase.database().ref(`users/${userId}/notes`)
}







