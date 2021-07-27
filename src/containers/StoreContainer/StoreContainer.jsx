import React from 'react'
import BannerStore from '../../components/BannerStore';
import ListStore from '../../components/ListStore';
import ExplorerStore from '../../components/ExplorerStore';


const StoreContainer = () => {
  return (
    <div>
      <BannerStore />
      <ExplorerStore />
      <ListStore />
    </div>
  )
};

export default StoreContainer;

