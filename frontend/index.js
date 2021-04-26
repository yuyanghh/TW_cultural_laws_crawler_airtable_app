import { initializeBlock, useBase, useRecords } from '@airtable/blocks/ui';
import React from 'react';
// import Axios from 'axios';

const HelloWorldApp = () => {
  const base = useBase();
  const table = base.getTableByNameIfExists('我國文化法案');
  const view = table.getViewByName('我國文化法案_scripting');
  const queryResult = view.selectRecords();
  const records = useRecords(queryResult);

  //   const user = Axios.get('https://law.moj.gov.tw/Law/LawSearchResult.aspx', {
  //     params: { ty: 'ONEBAR', kw: '文化資產保存法' },
  //     crossOrigin: 'anonymous',
  //   })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  return (
    <div>
      {records.map((record) => {
        const recordName = record.name
          ? record.name
              .split('')
              .filter((name) => name != '《' && name != '》')
              .join('')
          : 'Unnamed record';
        return <p key={record.id}>{recordName}</p>;
      })}
    </div>
  );
};

initializeBlock(() => <HelloWorldApp />);
