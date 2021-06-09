import { Component } from 'react';
import Chart from 'react-apexcharts';

class PolarChart extends Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [123, 222, 249, 148, 179, 139, 174],

      options: {
        legend: {
          position: 'bottom',
          horizontalAlign: 'left',
          offsetY: 0,
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
        },
        labels: [
          '28.04.2020: 11.6kg (~11.1%)',
          '29.04.2020: 11.66kg (~12.1%)',
          '28.04.2020: 11.66kg (~11.1%)',
          '29.04.2020: 11.66kg (~12.1%)',
          '28.04.2020: 11.66kg (~11.1%)',
          '29.04.2020: 11.66kg (~12.1%)',
          '29.04.2020: 11.66kg (~12.1%)',
        ],
        // colors: ['#ee6d4d', '#fbbf4a', '#00cec1', '#352da4', '#f7b5a6', '#fddfa4', '#80e7df'],
        colors: ['#8dfdf0', '#07054b', '#ee6d4d', '#15fdaa', '#352da4', '#f7b5a6', '#00cec0'],
        chart: {
          type: 'polarArea',
        },
        stroke: {
          colors: ['#fff'],
        },
        fill: {
          opacity: 0.9,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div id="chart" style={{ position: 'relative' }}>
        <Chart options={this.state.options} series={this.state.series} type="polarArea" width="100%" />
        <div
          style={{
            position: 'absolute',
            top: '32%',
            left: '40%',
            zIndex: 1,
            backgroundColor: 'white',
            width: '150px',
            height: '150px',
            borderRadius: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            border: '4px solid lightgray',
            overflow: 'hidden',
          }}
        >
          <h1 style={{ margin: '0px', fontSize: '45px' }}>105</h1>
          <h2 style={{ margin: '0px', marginTop: '-15px', fontWeight: 'lighter' }}>tCO2</h2>
        </div>
      </div>
    );
  }
}

export default PolarChart;
