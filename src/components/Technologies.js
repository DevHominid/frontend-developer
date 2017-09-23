import React from 'react';
import PageHeader from './PageHeader';
import Footer from './Footer';
import Background from '../images/technologies-cover.jpg';
import { job, Level } from '../jobData';
import DataItem from './DataItem';


const Technologies = () => {
  // Reference data
  const data = job.technologies;

  // Process data into [key: , value: ] array
  const result = Object.keys(data).filter((i) => {
    return i != 'testing' && i != 'framework';
  }).map(key => ({ key, value: data[key] }));

  // Map data into corresponding DataItem components
  const listItems = result.map((item, index) =>
    <DataItem label={item.key} value={item.value} options={Level().all} />
  );

  // Process testing data into [key: , value: ] array
  const resultTesting = Object.keys(data.testing.oneof).map(key => ({ key, value: data.testing.oneof[key] }));

  // Map framework data into corresponding DataItem components
  const listTestingItems = resultTesting.map((item, index) =>
    <DataItem label={item.key} value={item.value} options={Level().all} />
  );

  // Process framework data into [key: , value: ] array
  const resultFramework = Object.keys(data.framework.oneof).map(key => ({ key, value: data.framework.oneof[key] }));

  // Map framework data into corresponding DataItem components
  const listFrameworkItems = resultFramework.map((item, index) =>
    <DataItem label={item.key} value={item.value} options={Level().all} />
  );

  return (
    <div>
      <PageHeader title={'Technologies'} />
      <section>
        <div className='data-box'>
          {listItems}
        </div>
        <div className='data-box'>
          {listTestingItems}
        </div>
        <div className='data-box'>
          {listFrameworkItems}
        </div>
      </section>
      <Footer background={Background} />
    </div>
  )
};

export default Technologies;