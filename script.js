const starsContainer = document.getElementById('stars-container');
const videoModal = document.getElementById('video-modal');
const closeButton = document.getElementById('close-button');
const videoPlayer = document.getElementById('video-player');

const starData = [
    { videoSrc: 'video1.mp4', imageSrc: 'star1.png' },
    { videoSrc: 'video2.mp4', imageSrc: 'star2.png' },
    { videoSrc: 'video3.mp4', imageSrc: 'star3.png' },
    { videoSrc: 'video4.mp4', imageSrc: 'star4.png' },
    { videoSrc: 'video5.mp4', imageSrc: 'star5.png' },
];

starData.forEach((data, index) => {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.backgroundImage = `url('${data.imageSrc}')`;

    star.addEventListener('click', () => {
        openVideoModal(data.videoSrc);
    });

    starsContainer.appendChild(star);
});

closeButton.addEventListener('click', closeVideoModal);

function openVideoModal(videoSrc) {
    videoPlayer.src = videoSrc;
    videoModal.style.display = 'block';
}

function closeVideoModal() {
    videoPlayer.pause();
    videoPlayer.src = '';
    videoModal.style.display = 'none';
}
