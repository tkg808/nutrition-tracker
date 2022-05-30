export default class Metrics
{
  constructor(
    gender,
    age,
    height,
    weight,
    activityLevel)
  {
    this.gender = gender;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.activityLevel = activityLevel;
  }

  getBMR()
  {
    // Calculation uses kg and cm.
    const base = Math.round((10 * this.weight / 2.2) + (6.25 * this.height * 2.54) - (5 * this.age));

    const adjusted = (this.gender === "male" ? base + 5 : base - 161);

    return (adjusted > 100 ? adjusted : "~");
  }

  getDailyCalories()
  {
    const val = (this.getBMR() * this.activityLevel);

    return (val > 100 ? val.toFixed(1) : "~");
  }
}

