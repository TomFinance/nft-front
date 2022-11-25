import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ItemDetail } from '../../pages/ItemDetailPage';
import { MainPage } from '../../pages/MainPage';
import { NFTItemUpload } from '../../pages/NFTItemUploadPage';
import { RankingList } from '../../pages/RankingListPage';
import { UserProfileEdit } from '../../pages/UserProfileEditPage';
import { UserProfile } from '../../pages/UserProfilePage';
import { UsersActive } from '../../pages/UsersActivityPage';
import {NFTListPage} from "../../pages/NFTListPage";


const Page404 = () => <h1>Four:oh:four</h1>;

const Layout = () => {
  return (
    <Routes>
      <Route path='/index' element={<MainPage />} />
      <Route path='/item/:itemId' element={<ItemDetail />} />
      <Route path='/rankings' element={<RankingList />} />
      <Route path='/activity' element={<UsersActive />} />
      <Route path='/user' element={<UserProfile />} />
      <Route path='/edit-profile' element={<UserProfileEdit />} />
      <Route path='/create' element={<NFTItemUpload />} />
      <Route path='/collections' element={<NFTListPage />} />
      <Route path='/' element={<MainPage />} />
      {/*<Route path="*" element={Page404}/>*/}
    </Routes>
  );
};


export default Layout;

// - index.html => Main Page
// - item.html => Item Detail Page
// - rankings.html => Ranking List Page
// - activity.html => User's Activity Page
// - user.html => User Profile Page
// - edit-profile.html => User Profile Edit Page
// - create.html => NTF item upload Page

/// /item/*
