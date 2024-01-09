const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media screen , pass to video element
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        // Catch Error
        console.log('Error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled =true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

selectMediaStream();