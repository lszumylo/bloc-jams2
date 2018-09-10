// Example album

var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26'},
    { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };

 // Another Example Album
  var albumMarconi = {
      title: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      albumArtUrl: 'assets/images/album_covers/20.png',
      songs: [
          { title: 'Hello, Operator?', duration: '1:01' },
          { title: 'Ring, ring, ring', duration: '5:01' },
          { title: 'Fits in your pocket', duration: '3:21'},
          { title: 'Can you hear me now?', duration: '3:14' },
          { title: 'Wrong phone number', duration: '2:15'}
      ]
  };

  var albumBeautifulTrauma = {
      title: 'Beautiful Trauma',
      artist: 'Pink',
      label: 'RCA',
      year: '2017',
      albumArtUrl: 'assets/images/album_covers/15.png',
      songs: [
          { title: 'Beautiful trauma', duration: '4:10' },
          { title: 'Revenge', duration: '3:46' },
          { title: 'Whatever you want', duration: '4:03'},
          { title: 'What about us', duration: '4:31' },
          { title: 'Secrets', duration: '3:30'}
      ]
  };

  var createSongRow = function(songNumber, songName, songLength) {
     var template =

            '<tr class="album-view-song-item">'
          + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
          + '  <td class="song-item-title">' + songName + '</td>'
          + '  <td class="song-item-duration">' + songLength + '</td>'
          + '</tr>'
          ;

          var $row = $(template);

          var clickHandler = function() {
            // clickHandler logic
          };

          var onHover = function(event) {
            //Placeholder for function logic
          };

        var offHover = function(event) {
          //placeholder for function logic
        };        }

          //#1
          $row.find('.song-item-number').click(clickHandler);
          // #2
          $row.hover(onHover, offHover);
          // #3
          return $row;
        };

          var rowHover = function(event) {
            // Placeholder for function logic
          };





var setCurrentAlbum = function(album) {
  // #1
  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');


     // #2
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);

     // #3
     $albumSongList.empty();

     // #4
     for (var i = 0; i < album.songs.length; i++) {
       var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
                $albumSongList.append($newRow);




 //Album button templates
 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

 //store state of playing songs
 var currentlyPlayingSong = null;

 $(document) .ready(function() {
   setCurrentAlbum(albumPicasso)
});












 // Select elements that we want to populate with text dynamically
 var albumTitle = document.getElementsByClassName('album-view-title')[0];
 var albumArtist = document.getElementsByClassName('album-view-artist'){0};
 var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
 var albumImage = document.getElementsByClassName('album-cover-art')[0];
 var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

 //Assign values to each part of the album (text, images)

 albumTitle.firstChild,nodeValue = album.name;
 albumArtist.firstChild.noveValue = album.artist;
 albumReleaseInfo.firstChild.nodeValue = album.year + '' + album.label;
 albumImage.setAttribute('src', album.albumArtUrl);

//clear contents of album song list songListContainer
albumSongList.innerHTML = '';

//Build list of songs from album JavaScript object
for (i = 0; i < album.songs.length; i++) {
  albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
}
};


var setCurrentAlbum = function(album) {

var findParentByClassName = function(element, targetClass) {
    var currentParent = element.parentElement;
    while (currentParent.className != targetClass && currentParent.className !== null) {
      currentParent = currentParent.parentElemet;
    }
    return currentParent;
}
};

var getSongItem = function(element) {
  switch (element.className) {
    case 'album-song-button':
    case 'ion-play':
    case 'ion-pause':
    return findParentByClassName(element, 'song-item-number');
    case 'album-view-song-item';
    return element.querySelector('.song-item-number');
    case 'song-item-title':
    case 'song-item-duration':
    return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
    case 'song-item-number';
    return element;
    default:
    return;
      }
};

var clickHandler = function(targetElement) {
  var songItem = getSongItem(targetElement);

  if (currentlyPlayingSong ===null) {
    songItem.innerHTML = pauseButtonTemplate;
    currentlyPlayingSong = songItem.getAttribute('data-song-number');
  } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
    songItem.innerHTML = playButtonTemplate;
    currentlyPlayingSong = null;

  } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
    var currentPlaySongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong +'"]');
    currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
    songItem.innerHTML = pauseButtonTemplate;
    currentlyPlayingSong = songItem.getAttribute('data-song-number');
  }
};

var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');

// Album button templates
var playButtonTemplate = '<a class= "album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>'

var currentlyPlayingSong = null;

window.onload = function()
  songListContainer.addEventListener('mouseover', function(event) {
    if (event.target.parentElement.className === 'album-view-song-item') {
    var songItem = getSongItem(event.target);

    if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
      songItem.innerHTML = playButtonTemplate;
    }
    }
  });

  for (var i = 0; i < songRows.length; i++) {
    songRow[i].addEventListener('mouseleave', function(event) {
      //#1
      var songItem = getSongItem(event.target);
      var songItemNumber = songItem.getAttribute('data-song-number');

      //#2
      if(songItemNumber !== currentlyPlayingSong) {
        songItem.innerHTML = songItemNumber;
      }
      });

      songRows[i].addEventListener('click', function(event) {
        clickHandler(event.target);
      });
  }


  var albums = [albumPicasso, albumMarconi, albumPink];
  var index = 1;
  albumImage.addEventListener("click", function(event) {
    setCurrentAlbum(albums[index]);
    index++;
    if (index == albums.length) {
index = 0;
    }
  });
};
