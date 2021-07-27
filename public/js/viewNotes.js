
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

    noteRef.on("value", (snapshot) => {
        const data = snapshot.val()
        renderDataAsHtml(data)
    })
}


const renderDataAsHtml = (data) => {
    let cards =``;
    for (const noteItem in data) {
        const note = data[noteItem]
        
    }

}


const createCard = (note) => {
    return `
        


    `
}





