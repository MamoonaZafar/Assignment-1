function make_album(artist: string, album: string, tracks?: number): { artist: string; album: string; tracks?: number } {
    const album_obj = { artist, album, tracks };
    if (tracks) {
      album_obj.tracks = tracks;
    }
    return album_obj;
  }
  
  const album1 = make_album("Adele", "21");
  const album2 = make_album("Coldplay", "A Head Full of Dreams", 12);
  const album3 = make_album("The Beatles", "Abbey Road", 17);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  