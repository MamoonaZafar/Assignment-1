function describe_city(city: string, country: string = 'USA'): void {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city('New York');
  describe_city('Lahore', 'Pakistan');
  describe_city('London', 'UK');
  