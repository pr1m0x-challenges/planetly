import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { createGraphData } from '../../services/helpers/createGraphData';

export default function PolarChartTwo(props: any) {
  const [render, setRender] = useState<boolean>(false);
  const [labels, setLabels] = useState<any>([]);
  const [series, setSeries] = useState<any>([]);

  useEffect(() => {
    console.log(props);

    if (props) {
      const getData = async () => {
        const data: any = await createGraphData(props.data);

        setSeries(data.series);
        setLabels(data.labels);

        data && setRender(true);
      };
      getData();
    }
  }, []);

  if (!render) {
    return <></>;
  }

  const optionsTwo = {
    labels: labels,
    colors: ['#8dfdf0', '#07054b', '#ee6d4d', '#15fdaa', '#352da4', '#f7b5a6', '#00cec0'],
  };

  return (
    <div id="chart" style={{ position: 'relative' }}>
      <Chart options={optionsTwo} series={series} type="polarArea" width="100%" />
      {/* <div
        style={{
          position: 'absolute',
          top: '36.5%',
          left: '30%',
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
          opacity: '0.8',
        }}
      >
        <h1 style={{ margin: '0px', fontSize: '45px' }}>105</h1>
        <h2 style={{ margin: '0px', marginTop: '-15px', fontWeight: 'lighter' }}>tCO2</h2>
      </div> */}
    </div>
  );
}
