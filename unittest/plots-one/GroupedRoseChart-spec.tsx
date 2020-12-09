import React from 'react';
import GroupedRoseChart from '../../src/plots/GroupedRoseChart';
import { render, cleanup } from '@testing-library/react';


const MOCK_DATA = [
  { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
  { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
  { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
  { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
  { name: 'London', 月份: 'May', 月均降雨量: 47 },
  { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
  { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
  { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
  { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
  { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
  { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
  { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
  { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
  { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
  { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
  { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 },
];


describe('Plots-GroupedRoseChart', () => {
  test('新版本基础分组玫瑰图', () => {
    let chart = null;
    render(<GroupedRoseChart
      data={MOCK_DATA}
      xField="月份"
      yField="月均降雨量"
      seriesField="name"
      autoFit
      title="新版本基础分组玫瑰图"
      onGetG2Instance={
        (c) => chart = c
      }
    />)

    expect(chart.options.xField).toBe('月份');
    expect(chart.options.yField).toBe('月均降雨量');
    expect(chart.options.seriesField).toBe('name');
    // // expect(chart.options.autoFit).toBe(true); // autoFit被转成了forceFit,所以不测试autoFit
    // cleanup();
  });

  test('老版本基础分组玫瑰图categoryField*radiusField*groupField', () => {
    let chart = null;
    // @ts-ignore
    render(<GroupedRoseChart
      data={MOCK_DATA}
      categoryField="月份"
      radiusField="月均降雨量"
      groupField="name"
      autoFit
      title="老版本基础分组玫瑰图categoryField*radiusField*groupField"
      onGetG2Instance={
        (c) => chart = c
      }
    />)
    expect(chart.options.categoryField).toBe('月份');
    expect(chart.options.radiusField).toBe('月均降雨量');
    expect(chart.options.groupField).toBe('name');

    // // expect(chart.options.autoFit).toBe(true); // autoFit被转成了forceFit,所以不测试autoFit
    // cleanup();
  });

});
