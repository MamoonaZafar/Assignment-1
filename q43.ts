function make_great(magicians: string[]): string[] {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
      greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
  }
  function show_magicians(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
      console.log(magicians[i]);
    }
  }
  
  const magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
  const greatMagicians = make_great(magicians);
  
  show_magicians(magicians);
  show_magicians(greatMagicians);
  