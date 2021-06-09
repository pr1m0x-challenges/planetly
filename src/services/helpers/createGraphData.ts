export const createGraphData = (data: any) => {
  return new Promise((resolve, reject) => {
    const series: any = [];
    const labels: any = [];

    data.forEach((day: any, i: number) => {
      series.push(day['carbon_kg']);
      labels.push(
        `${day.date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })} ~${
          day['carbon_kg']
        } kg`
      );

      if (i + 1 === data.length) {
        resolve({ series, labels });
      }
    });
  });
};
