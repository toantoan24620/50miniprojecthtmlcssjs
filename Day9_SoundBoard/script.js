const sounds = ['diVeNha','loiNho','1TrieuLike','muoiNam','baiNayChillPhet','lamGiPhaiHot','sangxinmin','hetnhac'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = document.getElementById(sound).getAttribute('alt');

    btn.addEventListener('click',() => {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})
function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}