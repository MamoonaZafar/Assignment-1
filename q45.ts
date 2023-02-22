function make_car(manufacturer: string, model: string, ...options: [string, any][]): {manufacturer: string, model: string, [key: string]: any} {
    const car = {manufacturer, model};
    for (const [key, value] of options) {
      car[key] = value;
    }
    return car;
  }
  
  const car1 = make_car("Toyota", "Camry", ["color", "silver"], ["transmission", "automatic"]);
  console.log(car1);
  
  const car2 = make_car("Tesla", "Model S", ["color", "red"], ["features", ["Autopilot", "FSD"]]);
  console.log(car2);
  