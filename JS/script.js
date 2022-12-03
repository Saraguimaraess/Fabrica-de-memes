async function enablePhotoUpload() {
    const imageInput = document.querySelector("#image-input"); //lendo display de imagem
    imageInput.addEventListener("change", function () { //add um evento que vai ficar escutando, quando for fazer uma troca, o que vai executar? 
        // Vai chamar um leitor e add um evento a esse leitor.
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const uploadImage = reader.result;
            changeMemePicture();

        });
        reader.readAsDataURL(this.files[0]); //o que isso faz? 
    }
    )

}
async function mapImageList() { //Única função: mapear as imagens
    const memesObject = [
        {
            "name": "Garotinha",
            "path": "pictures/chloe.jpg"
        },
        {
            "name": "Gato 1",
            "path": "pictures/funny-cat1.png"
        },
        {
            "name": "Gato 2",
            "path": "pictures/funny-cat2.png"
        },
        {
            "name": "Menino meme",
            "path": "pictures/menino.png"
        },
    ]
    return memesObject;
}
async function createGallery(imageList) {//Única função: crair galeria de imagens
    const memeSelector = document.querySelector("#meme-list"); // pq usar o query selector?
    imageList.forEach(picture => {
        let newOption = document.createElement("option");
        newOption.text = picture.name.toUpperCase();
        newOption.value = picture.path;
        memeSelector.appendChild(newOption);

    });
}
async function changeMemePicture(photo) {
    let displayImage = document.querySelector("#display-image");
    displayImage.style.backgroundImage = `url("${photo}")`;

}
async function main() { //a função que vai chamar outras funções (a porta de entrada)
    const memesImageList = await mapImageList();
    enablePhotoUpload();
    await createGallery(memesImageList);
    await changeMemePicture(memesImageList[0].path);
}
main(); 
