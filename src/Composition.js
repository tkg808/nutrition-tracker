export default class Composition
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
    this.bmr = this.getBMR();
    this.dailyCalories = this.getDailyCalories();
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
    const val = Math.round(this.bmr * this.activityLevel);

    return (val > 100 ? val : "~");
  }
}

