
window.onload = event => {
    
    firebase.auth().onAuthStateChanged(user => {

        if(user)
        {
            const googleUserId = user.uid
            getNotes(googleUserId)
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
        cards += createCard(note)
    }
    document.querySelector("#app").innerHTML = cards

}


const createCard = (note) => {
    return `
        <div class="column is-one-quarter">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title">${note.title}</p>
                </header>
                <div class="card-content">
                    <div class="content">${note.text}</div>
                </div>
            </div>
        </div>
    `
}





