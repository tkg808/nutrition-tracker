export default class Macros
{
  constructor(
    fatsPercent,
    carbsPercent,
    proteinsPercent
  )
  {
    this.fatsPercent = fatsPercent;
    this.carbsPercent = carbsPercent;
    this.proteinsPercent = proteinsPercent;
  }

  getFats(calories)
  {
    const fats = calories * (this.fatsPercent / 100) / 9;
    return fats.toFixed(1);
  }

  getCarbs(calories)
  {
    const carbs = calories * (this.carbsPercent / 100) / 4;
    return carbs.toFixed(1);
  }

  getProteins(calories)
  {
    const proteins = calories * (this.proteinsPercent / 100) / 4;
    return proteins.toFixed(1);
  }
}