import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import HomePage from 'pages/HomePage';
import GalleryPage from 'pages/GalleryPage';
import BreedsPage from 'pages/BreedsPage';
import VotingPage from 'pages/VotingPage';

const AppRoutes = () => (
  <Routes>
    {/* <Route path={ROUTES.HOME} element={<HomePage />}></Route> */}
    <Route index element={<HomePage />} />
    <Route path={ROUTES.VOTING} element={<VotingPage />} />
    <Route path={ROUTES.BREEDS} element={<BreedsPage />} />

    <Route path={ROUTES.GALLERY} element={<GalleryPage />} />
  </Routes>
);

export default AppRoutes;
