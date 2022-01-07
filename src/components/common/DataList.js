import React from 'react'

const DataList = ({ itemComponent: ItemComponent, dataList }) =>
  dataList.map((data, index) => <ItemComponent key={data?.id || index} {...data} />)

export default DataList
