import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

export default function Graph({ current, daily, dailyCalories })
{
  Chart.register(ArcElement, Tooltip, Legend);
  // const DATA_COUNT = 8;
  // const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

  // const labels = Utils.months({count: 7});

  const data =
  {
    labels:
      [
        'Current Calories',
        'Daily Calories',
        'Current Carbs',
        'Daily Carbs',
        'Current Proteins',
        'Daily Proteins',
        'Current Fats',
        'Daily Fats'
      ],
    datasets:
      [
        // Labels generator is only using the first data object in datasets.
        {
          label: 'Calories',
          backgroundColor: ['#AAA', '#777'],
          // backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)',],
          data: [current.calories, dailyCalories]
        },
        {
          label: 'Carbs',
          backgroundColor: ['hsl(0, 100%, 60%)', 'hsl(0, 100%, 35%)'],
          data: [current.carbs, daily.getCarbs(dailyCalories)]
        },
        {
          label: 'Proteins',
          backgroundColor: ['hsl(100, 100%, 60%)', 'hsl(100, 100%, 35%)'],
          data: [current.proteins, daily.getProteins(dailyCalories)]
        },
        {
          label: 'Fats',
          backgroundColor: ['hsl(180, 100%, 60%)', 'hsl(180, 100%, 35%)'],
          data: [current.fats, daily.getFats(dailyCalories)]
        }
      ]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            generateLabels: function (chart)
            {
              // Get the default label list
              const original = Chart.overrides.pie.plugins.legend.labels.generateLabels;
              const labelsOriginal = original.call(this, chart);

              // Build an array of colors used in the datasets of the chart
              let datasetColors = chart.data.datasets.map(function (e)
              {
                return e.backgroundColor;
              });
              datasetColors = datasetColors.flat();

              // Modify the color and hide state of each label
              labelsOriginal.forEach(label =>
              {
                // There are twice as many labels as there are datasets. This converts the label index into the corresponding dataset index
                label.datasetIndex = (label.index - label.index % 2) / 2;
                // label.datasetIndex = index;

                // The hidden state must match the dataset's hidden state
                label.hidden = !chart.isDatasetVisible(label.datasetIndex);

                // Change the color to match the dataset
                // Use label's index, since there are enough colors for each label in the legend.
                label.fillStyle = datasetColors[label.index];
              });

              return labelsOriginal;
            }
          },
          onClick: function (mouseEvent, legendItem, legend)
          {
            // toggle the visibility of the dataset from what it currently is
            legend.chart.getDatasetMeta(
              legendItem.datasetIndex
            ).hidden = legend.chart.isDatasetVisible(legendItem.datasetIndex);
            legend.chart.update();
          }
        },
        tooltip: {
          callbacks: {
            label: function (context)
            {
              const labelIndex = (context.datasetIndex * 2) + context.dataIndex;
              return context.chart.data.labels[labelIndex] + ': ' + context.formattedValue;
            }
          }
        }
      }
    },
  };

  return (
    <div className="graph-container">
      <Pie
        className="graph"
        type={config.type}
        data={config.data}
        options={config.options} />
    </div>
  )
}