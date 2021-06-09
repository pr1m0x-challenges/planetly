import Chart from 'react-apexcharts';

export default function PolarChart(props: any) {
  const options = {
    labels: props.labels,
    colors: ['#ee6d4d', '#fbbf4a', '#00cec1', '#352da4', '#f7b5a6', '#fddfa4', '#80e7df'],
    markers: {
      width: 25,
      height: 12,
      strokeWidth: 0,
      strokeColor: '#fff',
      fillColors: undefined,
      radius: 12,
      customHTML: undefined,
      onClick: undefined,
      offsetX: 0,
      offsetY: 0,
    },
    itemMargin: {
      horizontal: 5,
      vertical: 3,
    },
  };

  return (
    <div id="chart" style={{ position: 'relative' }}>
      <Chart options={options} series={props.series} type="polarArea" width="100%" />
    </div>
  );
}
